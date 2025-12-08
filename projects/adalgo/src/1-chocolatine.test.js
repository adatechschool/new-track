import {expect, test} from "vitest";
import {chocolatine} from "./1-chocolatine";

test("remplace une occurrence simple", () => {
    expect(chocolatine("pain au chocolat")).toBe("chocolatine");
});

test("remplace une occurrence plurielle au milieu d'une phrase", () => {
    expect(chocolatine("J'ai acheté des pains au chocolat ce matin.")).toBe("J'ai acheté des chocolatines ce matin.");
});

test("remplace plusieurs occurrences dans le message", () => {
    expect(chocolatine("pain au chocolat, pain au chocolat, et encore pain au chocolat !")).toBe(
        "chocolatine, chocolatine, et encore chocolatine !"
    );
});

test("ne modifie pas le message si 'pain au chocolat' n'est pas présent", () => {
    expect(chocolatine("J'adore les croissants et les brioches.")).toBe("J'adore les croissants et les brioches.");
});

test("change l'article un par une quand il est utilisé avec pain au chocolat", () => {
    expect(
        chocolatine("Quand je vais à la boulangerie, je prends toujours un pain au chocolat avant d'aller en cours.")
    ).toBe("Quand je vais à la boulangerie, je prends toujours une chocolatine avant d'aller en cours.");
});

test("la version mal orthographiée 'pain au chocolats' ne doit pas être remplacée", () => {
    expect(chocolatine("Je voudrais deux pain au chocolats s'il vous plaît.")).toBe(
        "Je voudrais deux pain au chocolats s'il vous plaît."
    ); // ne change rien
});
