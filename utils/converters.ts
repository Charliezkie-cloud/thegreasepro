/**
 * Converts date string to human readable date
 * @param dateString The date string
 * @returns The human readable date format
 */
export function convertToHumanDate(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

/**
 * Converts the time string to human readable time
 * @param timeString The time string
 * @returns The human readable time format
 */
export function convertToHumanTime(timeString: string): string {
  const [hourStr, minuteStr] = timeString.split(':');
  let hours = parseInt(hourStr, 10);
  const minutes = minuteStr.padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes} ${ampm}`;
}