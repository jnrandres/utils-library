"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateDayToSpanish = exports.capitalizeFirstLetter = void 0;
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
/**
 * Translates the given English day of the week to its Spanish equivalent.
 *
 * @param day - The English name of the day (e.g., "Monday", "Tuesday").
 * @returns The Spanish name of the day (e.g., "Lunes", "Martes").
 */
const translateDayToSpanish = (day) => {
    let translate = "";
    switch (day) {
        case "Monday":
            translate = "Lunes";
            break;
        case "Tuesday":
            translate = "Martes";
            break;
        case "Wednesday":
            translate = "Miércoles";
            break;
        case "Thursday":
            translate = "Jueves";
            break;
        case "Friday":
            translate = "Viernes";
            break;
        case "Saturday":
            translate = "Sábado";
            break;
        case "Sunday":
            translate = "Domingo";
            break;
    }
    return translate;
};
exports.translateDayToSpanish = translateDayToSpanish;
