/**
 * The function formats a given date according to the rules:
 * - If posted within 60 seconds → "X seconds ago"
 * - If posted within 60 minutes → "X minutes ago"
 * - If posted within 24 hours → "X hours ago"
 * - If posted more than 24 hours but within the same year → "MMM DD at HH:mm"
 * - If posted more than a year ago → "MMM DD, YYYY at HH:mm"
 * 
 * @param date - The date the post was created
 * @returns {string} - Formatted string indicating the relative or absolute time
 */
/**
 * Formats a given date to a human-readable format as required.
 * @param {Date} date - The date when the event happened.
 * @returns {string} - The formatted date string.
 */
const getMetaData = (date: Date): string => {
  const now = new Date();
  const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffYears = now.getFullYear() - date.getFullYear();

  if (diffSeconds < 60) return `${diffSeconds} seconds ago`;
  if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
  if (diffHours < 24) return `${diffHours} hours ago`;

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  if (diffYears > 0) {
    options.year = "numeric";
  }

  return `asked ${date.toLocaleDateString("en-US", options).replace(",", "")} at ${date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })}`;
};

export { getMetaData };
