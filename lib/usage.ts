import connectDB from "@/lib/mongodb";
import CreditAccount from "@/models/CreditAccount";
import UsageLedger from "@/models/UsageLedger";

const LIMITS = { free: 1000, pro: 25000, business: 150000, enterprise: 1000000 } as const;

export async function getCreditAccount(userId: string) {
  await connectDB();
  let account = await CreditAccount.findOne({ userId });
  if (!account) account = await CreditAccount.create({ userId, monthlyLimit: LIMITS.free });
  if (new Date() >= account.cycleEnd) {
    account.used = 0;
    account.cycleStart = new Date();
    account.cycleEnd = new Date(Date.now() + 30 * 86400000);
    await account.save();
  }
  return account;
}

export async function recordUsage(input: {
  userId: string;
  units: number;
  kind?: "ai" | "api" | "credit" | "adjustment";
  idempotencyKey: string;
  metadata?: Record<string, unknown>;
}) {
  await connectDB();
  const existing = await UsageLedger.findOne({ idempotencyKey: input.idempotencyKey });
  if (existing) return { recorded: false, ledger: existing };
  const account = await getCreditAccount(input.userId);
  if (input.units > account.monthlyLimit - account.used) throw new Error("USAGE_LIMIT_REACHED");
  const ledger = await UsageLedger.create({ ...input, kind: input.kind ?? "ai" });
  await CreditAccount.updateOne({ _id: account._id }, { $inc: { used: input.units } });
  return { recorded: true, ledger };
}
