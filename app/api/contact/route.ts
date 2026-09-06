import { NextResponse } from "next/server";
import validator from "validator";

import connectDB from "@/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";

const MAX_BODY_LENGTH = 6_000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim().toLowerCase();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    if (name.length > 80 || message.length > 5000 || email.length > 254) {
      return NextResponse.json(
        { success: false, message: "Submitted data is too long." },
        { status: 400 }
      );
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    if (JSON.stringify(body).length > MAX_BODY_LENGTH) {
      return NextResponse.json(
        { success: false, message: "Request body is too large." },
        { status: 413 }
      );
    }

    await connectDB();
    await ContactMessage.create({ name, email, message });

    return NextResponse.json(
      { success: true, message: "Message received successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Unable to send message." },
      { status: 500 }
    );
  }
}
