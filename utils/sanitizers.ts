import { BookingBody } from "@/types/models.types";

import { sanitizeString } from "./helpers";
import { convertToHumanDate, convertToHumanTime } from "./converters";

/**
 * Sanitizes the booking body into a safe data.
 * @param body The body of the booking
 * @returns The sanitized booking body
 */
export function sanitizeBookingBody(body: BookingBody): BookingBody {
  const sanitizedPrefferedDate = sanitizeString(body.preferredDate);
  const formattedPreferredDate = convertToHumanDate(sanitizedPrefferedDate);
  const sanitizedPreferredTime = sanitizeString(body.preferredTime);
  const formattedPreferredTime = convertToHumanTime(sanitizedPreferredTime);

  return {
    firstName: sanitizeString(body.firstName),
    lastName: sanitizeString(body.lastName),
    mobileNumber: sanitizeString(body.mobileNumber),
    emailAddress: sanitizeString(body.emailAddress),
    servicePackage: sanitizeString(body.servicePackage),
    preferredDate: formattedPreferredDate,
    preferredTime: formattedPreferredTime,
    servicesAddress: sanitizeString(body.servicesAddress),

    vehicleDetails: sanitizeString(body.vehicleDetails, true),
  };
}