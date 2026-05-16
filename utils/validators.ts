import { BookingBody } from "@/types/models.types";

/**
 * Validates the booking form
 * @param body The booking body data
 * @returns The message of the invalid input otherwise false for valid
 */
export function validateBookingForm(body: BookingBody): string | boolean {
  const checkString = (value: string, name: string, maxLen?: number): string | null => {
    const trimmed = value.trim();
    if (!trimmed) return `${name} is required.`;
    if (maxLen && trimmed.length > maxLen) return `${name} cannot exceed ${maxLen} characters.`;
    return null;
  };

  const error = checkString(body.servicePackage, "Service package") || checkString(body.firstName, "First name", 64) ||
                checkString(body.lastName, "Last name", 64) || checkString(body.mobileNumber, "Mobile number", 15) ||
                checkString(body.servicesAddress, "Service address", 150) || checkString(body.vehicleDetails, "Vehicle details", 254) ||
                checkString(body.preferredDate, "Preferred date", 254) || checkString(body.preferredTime, "Preferred time", 254);

  if (error) return error;

  const email = body.emailAddress.trim();
  if (!email) return "Email address is required.";
  if (!email.includes("@")) return "Email address is missing an '@' symbol.";
  if (email.length > 254) return "Email address cannot exceed 254 characters.";

  return false;
}