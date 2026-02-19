import { test, expect } from "vitest";
import { calculator } from "./1bis-calculator";

test("Check if the simple function works", () => {
  expect(calculator(2, 3, "+")).toBe(5);
  expect(calculator(10, 3, "-")).toBe(7);
  expect(calculator(-7, 3, "*")).toBe(-21);
  expect(calculator(3, 3, "/")).toBe(1);
});

test("Check if one argument is empty", () => {
  expect(calculator(_, 10, "+").toBe("is empty"));
  expect(calculator(10, _, "+").toBe("is empty"));
  expect(calculator(10, 10, "_").toBe("no operators"));
});
