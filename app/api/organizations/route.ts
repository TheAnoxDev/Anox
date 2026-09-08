import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import Organization from "@/models/Organization";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  await connectDB();
  const orgs = await Organization.find({ "members.userId": session.user.id }).select("name slug ownerId members").lean();
  return NextResponse.json({ success: true, organizations: orgs });
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const slug = String(body.slug || name.toLowerCase().replace(/[^a-z0-9]+/g, "-")).replace(/^-|-$/g, "").slice(0, 60);
    if (name.length < 2 || !slug) return NextResponse.json({ success: false, message: "Invalid organization" }, { status: 400 });
    await connectDB();
    const org = await Organization.create({ name, slug, ownerId: session.user.id, members: [{ userId: session.user.id, role: "owner" }] });
    return NextResponse.json({ success: true, organization: { id: org._id.toString(), name: org.name, slug: org.slug, role: "owner" } }, { status: 201 });
  } catch (error) {
    const duplicate = error instanceof Error && error.message.includes("duplicate");
    return NextResponse.json({ success: false, message: duplicate ? "Organization slug already exists" : "Unable to create organization" }, { status: duplicate ? 409 : 500 });
  }
}
