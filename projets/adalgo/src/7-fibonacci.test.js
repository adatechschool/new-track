describe("fibonacci", () => {
  test("returns empty array for 0", () => {
    expect(fibonacci(0)).toEqual([]);
  });

  test("returns [0] for 1", () => {
    expect(fibonacci(1)).toEqual([0]);
  });

  test("returns [0,1] for 2", () => {
    expect(fibonacci(2)).toEqual([0, 1]);
  });

  test("returns first 5 numbers", () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test("handles larger input", () => {
    expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
});
