import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import ApiKey from "@/models/ApiKey";

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  try {
    const { id } = await context.params;
    await connectDB();
    const result = await ApiKey.updateOne({ _id: id, userId: session.user.id, revokedAt: null }, { $set: { revokedAt: new Date() } });
    if (!result.matchedCount) return NextResponse.json({ success: false, message: "Key not found" }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, message: "Unable to revoke key" }, { status: 500 });
  }
}
