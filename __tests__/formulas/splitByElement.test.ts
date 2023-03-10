import { describe, test, expect } from "@jest/globals";
import { splitByElement } from "../../src/components/compounds/helpers/splitFormula";

describe("Test for splitting text by element", () => {
    test("All capital letters", () => {
        const formula: string = "SCN";

        const elements: string[] = splitByElement(formula);
        expect(elements).toEqual(["S", "C", "N"]);
    });

    test("String with length 0", () => {
        const formula: string = "";

        const elements: string[] = splitByElement(formula);
        expect(elements).toEqual([]);
    });

    test("First character is lowercase", () => {
        const formula: string = "sCN";

        const elements: string[] = splitByElement(formula);
        expect(elements).toEqual([]);
    });

    test("Formula with no subscripts, but both uppercase and lowercase letters", () => {
        const formula: string = "CaSe";

        const elements: string[] = splitByElement(formula);
        expect(elements).toEqual(["Ca", "Se"]);
    });

    test("Formula with subscripts", () => {
        const formula: string = "CaSO/4/";

        const elements: string[] = splitByElement(formula);
        expect(elements).toEqual([]);
    });
});