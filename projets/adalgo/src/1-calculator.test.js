describe("calculator", () => {
  test("adds two numbers", () => {
    expect(calculator(2, 3, "+")).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(calculator(5, 2, "-")).toBe(3);
  });

  test("multiplies two numbers", () => {
    expect(calculator(4, 3, "*")).toBe(12);
  });

  test("divides two numbers", () => {
    expect(calculator(10, 2, "/")).toBe(5);
  });

  test("returns error for invalid operator", () => {
    expect(calculator(2, 3, "%")).toBe("no operators");
  });

  test("returns error if x is not a number", () => {
    expect(calculator("a", 3, "+")).toBe("is empty");
  });

  test("returns error if y is not a number", () => {
    expect(calculator(3, "b", "+")).toBe("is empty");
  });
});
