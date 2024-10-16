"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("../../src/string");
describe("String.translateDayToSpanish", () => {
    it("should return 'Lunes' for 'Monday'", () => {
        const result = (0, string_1.translateDayToSpanish)("Monday");
        expect(result).toBe("Lunes");
    });
    it("should return 'Martes' for 'Tuesday'", () => {
        const result = (0, string_1.translateDayToSpanish)("Tuesday");
        expect(result).toBe("Martes");
    });
    it("should return 'Miércoles' for 'Wednesday'", () => {
        const result = (0, string_1.translateDayToSpanish)("Wednesday");
        expect(result).toBe("Miércoles");
    });
    it("should return 'Jueves' for 'Thursday'", () => {
        const result = (0, string_1.translateDayToSpanish)("Thursday");
        expect(result).toBe("Jueves");
    });
    it("should return 'Viernes' for 'Friday'", () => {
        const result = (0, string_1.translateDayToSpanish)("Friday");
        expect(result).toBe("Viernes");
    });
    it("should return 'Sábado' for 'Saturday'", () => {
        const result = (0, string_1.translateDayToSpanish)("Saturday");
        expect(result).toBe("Sábado");
    });
    it("should return 'Domingo' for 'Sunday'", () => {
        const result = (0, string_1.translateDayToSpanish)("Sunday");
        expect(result).toBe("Domingo");
    });
    it("should return '' for an unknown day", () => {
        const result = (0, string_1.translateDayToSpanish)("Unknown");
        expect(result).toBe("");
    });
});
