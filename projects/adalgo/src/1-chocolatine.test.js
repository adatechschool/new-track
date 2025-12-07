import {expect, test} from "vitest";
import {chocolatine} from "./1-chocolatine";

test("chocolatine", () => {
    expect(chocolatine("pain au chocolat")).toBe("chocolatine");
});
