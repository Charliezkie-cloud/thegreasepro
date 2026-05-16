import nodemailer, { SentMessageInfo } from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";

const GOOGLE_RECEIVER = process.env.GOOGLE_RECEIVER ?? "";
const GOOGLE_SENDER = process.env.GOOGLE_SENDER ?? "";
const GOOGLE_SENDER_APP_PASSWORD = process.env.GOOGLE_SENDER_APP_PASSWORD ?? "";

// Transporter for node mailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GOOGLE_SENDER,
    pass: GOOGLE_SENDER_APP_PASSWORD,
  },
});

/**
 * Send a new booking email to the company ;D
 * @param html The finalized html of the new booking template
 * @returns The sent message info of the mail
 */
export async function sendNewBookingMail(html: string): Promise<SentMessageInfo> {
  const mailOptions: MailOptions = {
    from: 'TheGreasePro <charliezkiecharlzk@gmail.com>',
    to: GOOGLE_RECEIVER,
    subject: "New Booking from TheGreasePro",
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
  }
}