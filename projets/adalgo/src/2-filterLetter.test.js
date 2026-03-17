import {describe, it, test, expect} from 'vitest'
import {filterLetter} from './2-filterLetter'

describe("filterLetter", () => {
  it("calls first callback when argument is a letter", () => {
    const result = filterLetter(
      "a",
      (e) => `${e} is a letter`,
      (e) => `${e} is NOT a letter`,
    );

    expect(result).toBe("a is a letter");
  });

  it("calls second callback when argument is a number", () => {
    const result = filterLetter(
      "8",
      (e) => `${e} is a letter`,
      (e) => `${e} is NOT a letter`,
    );

    expect(result).toBe("8 is NOT a letter");
  });

  it("handles numeric string correctly", () => {
    const result = filterLetter(
      "123",
      (e) => `${e} is a letter`,
      (e) => `${e} is NOT a letter`,
    );

    expect(result).toBe("123 is NOT a letter");
  });

  it("handles special characters as letters (non numeric)", () => {
    const result = filterLetter(
      "@",
      (e) => `${e} is a letter`,
      (e) => `${e} is NOT a letter`,
    );

    expect(result).toBe("@ is a letter");
  });
});
