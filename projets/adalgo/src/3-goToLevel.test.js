describe("goToLevel", () => {
  test("goes up correctly", () => {
    expect(goToLevel(0, 5)).toBe(5);
  });

  test("goes down correctly", () => {
    expect(goToLevel(5, 2)).toBe(-3);
  });

  test("returns 0 if end floor is out of range", () => {
    expect(goToLevel(0, 25)).toBe(0);
  });

  test("returns 0 if start floor is out of range", () => {
    expect(goToLevel(-1, 5)).toBe(0);
  });

  test("returns 0 if start equals end", () => {
    expect(goToLevel(3, 3)).toBe(0);
  });
});
