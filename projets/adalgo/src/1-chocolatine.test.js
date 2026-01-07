import {expect, test} from "vitest";
import {chocolatine} from "./1-chocolatine";

test("replaces a simple occurrence", () => {
    expect(chocolatine("pain au chocolat")).toBe("chocolatine");
});

test("replaces a plural occurrence in the middle of a sentence", () => {
    expect(chocolatine("J'ai acheté des pains au chocolat ce matin.")).toBe("J'ai acheté des chocolatines ce matin.");
});

test("replaces multiple occurrences in the message", () => {
    expect(chocolatine("pain au chocolat, pain au chocolat, et encore pain au chocolat !")).toBe(
        "chocolatine, chocolatine, et encore chocolatine !"
    );
});

test("does not modify the message if 'pain au chocolat' is not present", () => {
    expect(chocolatine("J'adore les croissants et les brioches.")).toBe("J'adore les croissants et les brioches.");
});

test("changes the article 'un' to 'une' when used with pain au chocolat", () => {
    expect(
        chocolatine("Quand je vais à la boulangerie, je prends toujours un pain au chocolat avant d'aller en cours.")
    ).toBe("Quand je vais à la boulangerie, je prends toujours une chocolatine avant d'aller en cours.");
});
