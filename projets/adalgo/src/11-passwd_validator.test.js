describe("passwd_validator", () => {
  test("returns false if less than 6 characters", () => {
    expect(passwd_validator("l#H1@")).toBe(false);
  });

  test("returns true for valid password", () => {
    expect(passwd_validator("el3H1@f")).toBe(true);
  });

  test("returns false if no number", () => {
    expect(passwd_validator("fwjifewJ#")).toBe(false);
  });

  test("returns false if no uppercase", () => {
    expect(passwd_validator("el3h1@f")).toBe(false);
  });

  test("returns false if no lowercase", () => {
    expect(passwd_validator("EL3H1@F")).toBe(false);
  });

  test("returns false if no special character", () => {
    expect(passwd_validator("el3H12f")).toBe(false);
  });

  test("returns false if more than 12 characters", () => {
    expect(passwd_validator("el3H1@fAAAAAA")).toBe(false);
  });
});
