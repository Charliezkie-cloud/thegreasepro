import { NextRequest, NextResponse } from "next/server";

import { BookingBody } from "@/types/models.types";
import { validateBookingForm } from "@/utils/validators";
import { getNewBookingHtml } from "@/utils/helpers";
import { sendNewBookingMail } from "@/utils/mailers";
import { sanitizeBookingBody } from "@/utils/sanitizers";

/**
 * The GET method 
 * @returns The next js response
 */
export async function GET() {
  return NextResponse.json({ message: "Bar foo ;D" });
}

/**
 * The POST method
 * @param request The next js request
 * @returns The next js response
 */
export async function POST(request: NextRequest) {
  try {
    const body: BookingBody = await request.json();
    const validationMessage = validateBookingForm(body);

    if (typeof validationMessage === "string")
      return NextResponse.json({ message: validationMessage }, { status: 400 });

    const sanitizedBody = sanitizeBookingBody(body);
    const finalizedHtml = await getNewBookingHtml(sanitizedBody);
    await sendNewBookingMail(finalizedHtml);

    return NextResponse.json({ message: "We have successfully sent your booking confirmation." });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : error },
      { status: 400 }
    );
  }
}