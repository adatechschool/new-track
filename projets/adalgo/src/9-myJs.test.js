import {suite, test, expect} from "vitest";
import {myIncludes, myJoin, myObjectKeys, myObjectEntries} from "./5-myJs";

suite("myJs", () => {
    test("myIncludes", () => {
        expect(myIncludes(["a", "b", "c"], "b")).toBe(true);
        expect(myIncludes(["a", "b", "c"], "d")).toBe(false);
        expect(myIncludes([], "a")).toBe(false);
        expect(myIncludes(["hello"], "hello")).toBe(true);
        expect(myIncludes(["1", "2", "3"], "2")).toBe(true);
    });

    // TODO: test myIndexOf
    // TODO: test myStartsWith
    // TODO: test myRepeat

    test("myJoin", () => {
        expect(myJoin(["a", "b", "c"], "-")).toBe("a-b-c");
        expect(myJoin(["hello", "world"], " ")).toBe("hello world");
        expect(myJoin([], ",")).toBe("");
        expect(myJoin(["x"], ",")).toBe("x");
        expect(myJoin(["", ""], ",")).toBe(",");
    });

    test("myObjectKeys", () => {
        expect(myObjectKeys({a: 1, b: 2})).toEqual(["a", "b"]);
        expect(myObjectKeys({})).toEqual([]);
        expect(myObjectKeys({x: undefined, y: null})).toEqual(["x", "y"]);
    });

    // TODO: test myObjectEntries
});
