import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getCreditAccount, recordUsage } from "@/lib/usage";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  try {
    const account = await getCreditAccount(session.user.id);
    return NextResponse.json({ success: true, usage: { plan: account.plan, used: account.used, limit: account.monthlyLimit, remaining: Math.max(0, account.monthlyLimit - account.used), cycleEnd: account.cycleEnd } });
  } catch {
    return NextResponse.json({ success: false, message: "Usage unavailable" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  try {
    const body = await request.json();
    const units = Number(body.units);
    if (!Number.isFinite(units) || units <= 0 || units > 1000000 || typeof body.idempotencyKey !== "string") return NextResponse.json({ success: false, message: "Invalid usage event" }, { status: 400 });
    const result = await recordUsage({ userId: session.user.id, units, kind: body.kind, idempotencyKey: body.idempotencyKey, metadata: body.metadata });
    return NextResponse.json({ success: true, recorded: result.recorded });
  } catch (error) {
    const message = error instanceof Error && error.message === "USAGE_LIMIT_REACHED" ? "Usage limit reached" : "Unable to record usage";
    return NextResponse.json({ success: false, message }, { status: message === "Usage limit reached" ? 429 : 500 });
  }
}
