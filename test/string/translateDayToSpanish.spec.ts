import { translateDayToSpanish } from "../../src/string";

describe("String.translateDayToSpanish", () => {
  it("should return 'Lunes' for 'Monday'", () => {
    const result = translateDayToSpanish("Monday");
    expect(result).toBe("Lunes");
  });

  it("should return 'Martes' for 'Tuesday'", () => {
    const result = translateDayToSpanish("Tuesday");
    expect(result).toBe("Martes");
  });

  it("should return 'Miércoles' for 'Wednesday'", () => {
    const result = translateDayToSpanish("Wednesday");
    expect(result).toBe("Miércoles");
  });

  it("should return 'Jueves' for 'Thursday'", () => {
    const result = translateDayToSpanish("Thursday");
    expect(result).toBe("Jueves");
  });

  it("should return 'Viernes' for 'Friday'", () => {
    const result = translateDayToSpanish("Friday");
    expect(result).toBe("Viernes");
  });

  it("should return 'Sábado' for 'Saturday'", () => {
    const result = translateDayToSpanish("Saturday");
    expect(result).toBe("Sábado");
  });

  it("should return 'Domingo' for 'Sunday'", () => {
    const result = translateDayToSpanish("Sunday");
    expect(result).toBe("Domingo");
  });

  it("should return '' for an unknown day", () => {
    const result = translateDayToSpanish("Unknown");
    expect(result).toBe("");
  });
});
