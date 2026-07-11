import { NextRequest, NextResponse } from "next/server";
import type { ContactFormData } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const { firstName, lastName, email, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // In production, send email via Resend, Nodemailer, etc.
    // For now, log the submission and return success.
    console.log("Contact form submission:", {
      name: `${firstName} ${lastName}`,
      email,
      phone: body.phone || "not provided",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Message received. We will be in touch shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
