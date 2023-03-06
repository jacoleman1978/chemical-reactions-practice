import { describe, test, expect } from "@jest/globals";
import { splitFormulaWithParentheses } from "../../src/components/compounds/helpers/splitFormulaWithParentheses";

describe("Test for formulas with parentheses", () => {
    test("Ammonium ion", () => {
        const [cation, cationSubscript, anion, anionSubscript] = splitFormulaWithParentheses("(NH/4/)/3/PO/4/");

        expect(cation).toBe("NH/4/");
        expect(cationSubscript).toBe("3");
        expect(anion).toBe("PO/4/");
        expect(anionSubscript).toBe("1");
    });

    test("Anion is in parentheses", () => {
        const [cation, cationSubscript, anion, anionSubscript] = splitFormulaWithParentheses("Ca(NO/3/)/2/");

        expect(cation).toBe("Ca");
        expect(cationSubscript).toBe("1");
        expect(anion).toBe("NO/3/");
        expect(anionSubscript).toBe("2");
    });

    test("Cation not ammonium and has subscript", () => {
        const [cation, cationSubscript, anion, anionSubscript] = splitFormulaWithParentheses("Fe/2/(SO/4/)/3/");

        expect(cation).toBe("Fe");
        expect(cationSubscript).toBe("2");
        expect(anion).toBe("SO/4/");
        expect(anionSubscript).toBe("3");
    });
});