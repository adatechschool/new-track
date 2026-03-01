describe("ingly", () => {
  test("adds ing if word does not end with ing", () => {
    expect(ingly("play")).toBe("playing");
  });

  test("adds ly if word ends with ing", () => {
    expect(ingly("playing")).toBe("playingly");
  });

  test("handles uppercase word", () => {
    expect(ingly("PLAY")).toBe("PLAYING");
  });

  test("handles empty string", () => {
    expect(ingly("")).toBe("ing");
  });

  test("handles word ending with ING uppercase", () => {
    expect(ingly("RUNNING")).toBe("RUNNINGLY");
  });
});
