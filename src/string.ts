/**
 * Capitalizes the first letter of the given string.
 *
 * @param str - The string to capitalize.
 * @returns The string with the first letter capitalized.
 */
export const capitalizeFirstLetter = (str: string | null): string => {
  if (!str) {
    return '';
  }
  console.log('capitalizeFirstLetter');
  return str.charAt(0).toUpperCase() + str.slice(1);
};