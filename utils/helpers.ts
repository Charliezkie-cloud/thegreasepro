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
  const templatePath = path.join(process.cwd(), 'email-templates', "new-booking");
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