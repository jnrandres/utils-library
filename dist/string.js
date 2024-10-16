"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirstLetter = void 0;
/**
 * Capitalizes the first letter of the given string.
 *
 * @param str - The string to capitalize.
 * @returns The string with the first letter capitalized.
 */
const capitalizeFirstLetter = (str) => {
    if (!str) {
        return '';
    }
    console.log('capitalizeFirstLetter');
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
