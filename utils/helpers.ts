import path from "path";
import { readFile } from "fs/promises";

import { BookingBody } from "@/types/models.types";

const BUSINESS_NUMBER = process.env.NEXT_PUBLIC_BUSINESS_NUMBER ?? "";

/**
 * Get the new booking populated html
 * @param filename The name of the file
 * @param body The booking body
 * @returns The new booking populated HTML string
 */
export async function getNewBookingHtml(body: BookingBody): Promise<string> {
  const templatePath = path.join(process.cwd(), "public", 'email-templates', "new-booking.html");
  const rawHtmlContent = await readFile(templatePath, 'utf8');
  return rawHtmlContent
    .replaceAll('{{servicePackage}}', body.servicePackage)
    .replaceAll('{{firstName}}', body.firstName)
    .replaceAll('{{lastName}}', body.lastName)
    .replaceAll('{{mobileNumber}}', body.mobileNumber)
    .replaceAll('{{emailAddress}}', body.emailAddress)
    .replaceAll('{{servicesAddress}}', body.servicesAddress)
    .replaceAll('{{vehicleDetails}}', body.vehicleDetails)
    .replaceAll('{{preferredDate}}', body.preferredDate)
    .replaceAll('{{preferredTime}}', body.preferredTime)
    .replaceAll('{{phone}}', BUSINESS_NUMBER);
}

/**
 * Sanitizes the string into a safe string value
 * @param str The string
 * @param allowNewlines Allow new lines
 * @returns The sanitized string
 */
export function sanitizeString(str: string, allowNewlines = false): string {
  if (!str) return '';

  let sanitized = str.trim();

  sanitized = sanitized
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');

  if (allowNewlines)
    sanitized = sanitized.replace(/\r?\n/g, '<br />');

  return sanitized;
}