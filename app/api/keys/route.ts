import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { randomBytes } from "crypto";
import bcrypt from "bcrypt";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import ApiKey from "@/models/ApiKey";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  await connectDB();
  const keys = await ApiKey.find({ userId: session.user.id }).select("name prefix scopes lastUsedAt revokedAt createdAt").sort({ createdAt: -1 }).lean();
  return NextResponse.json({ success: true, keys });
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  try {
    const body = await request.json();
    const name = String(body.name || "ANOX API Key").trim().slice(0, 60);
    const raw = `anox_${randomBytes(24).toString("hex")}`;
    const keyHash = await bcrypt.hash(raw, 12);
    await connectDB();
    const key = await ApiKey.create({ userId: session.user.id, name, prefix: raw.slice(0, 13), keyHash, scopes: ["ai:read"] });
    return NextResponse.json({ success: true, key: { id: key._id.toString(), name, prefix: key.prefix, scopes: key.scopes, secret: raw } }, { status: 201 });
  } catch {
    return NextResponse.json({ success: false, message: "Unable to create API key" }, { status: 500 });
  }
}
