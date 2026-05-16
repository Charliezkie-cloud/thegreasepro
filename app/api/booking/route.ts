import { NextRequest, NextResponse } from "next/server";

import { BookingBody } from "@/types/models.types";
import { validateBookingForm } from "@/utils/validators";
import { getNewBookingHtml } from "@/utils/helpers";

/**
 * The GET method 
 * @returns The next js response
 */
export async function GET() {
  return NextResponse.json({ message: "Hello world" });
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
    if (typeof validateBookingForm === "string")
      return NextResponse.json({ message: validationMessage }, { status: 400 });

    const finalizedHtml = await getNewBookingHtml(body);

    return NextResponse.json({ success: true, preview: finalizedHtml });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : error },
      { status: 400 }
    );
  }
}