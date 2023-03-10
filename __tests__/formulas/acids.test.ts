import { describe, test, expect } from "@jest/globals";
import { getFormulaHints } from "../../src/components/compounds/helpers/getFormulaHints";

describe("Test hints for acids", () => {
    test("Formula starts with 'H'", () => {
        expect(getFormulaHints("ClH", "HCl", "acids")).toBe("All acid formulas start with an 'H'.");
    });

    const nitricAcid: string = "HNO/3/";
    const perchloricAcid: string = "HClO/4/";
    const sulfuricAcid: string = "H/2/SO/4/";
    const phosphoricAcid: string = "H/3/PO/4/";
    const nitrousAcid: string = "HNO/2/";
    const hypochlorousAcid: string = "HClO";
    const sulfurousAcid: string = "H/2/SO/3/";
    const hydrochloricAcid: string = "HCl";
    const hydrocyanicAcid: string = "HCN";

    test("H subscript is correct", () => {
        expect(getFormulaHints("H/2/NO/3/", nitricAcid, "acids")).toBe("Check the subscript for the cation. Since the cation for all acids is 'H' with a +1 charge, the charge of the anion will determine the subscript for 'H'.");

        expect(getFormulaHints("H/3/SO/4/", sulfuricAcid, "acids")).toBe("Check the subscript for the cation. Since the cation for all acids is 'H' with a +1 charge, the charge of the anion will determine the subscript for 'H'.");

        expect(getFormulaHints("HPO/4/", phosphoricAcid, "acids")).toBe("Check the subscript for the cation. Since the cation for all acids is 'H' with a +1 charge, the charge of the anion will determine the subscript for 'H'.");

        expect (getFormulaHints("HSO/3/", sulfurousAcid, "acids")).toBe("Check the subscript for the cation. Since the cation for all acids is 'H' with a +1 charge, the charge of the anion will determine the subscript for 'H'.");

        expect(getFormulaHints("H/2/Cl", hydrochloricAcid, "acids")).toBe("Check the subscript for the cation. Since the cation for all acids is 'H' with a +1 charge, the charge of the anion will determine the subscript for 'H'.");
    });

    test("Ate anions", () => {
        expect(getFormulaHints("HNO", nitricAcid, "acids")).toBe("Check the anion formula. If the name has the pattern of ____ic acid, without a 'hydro' prefix, then the anion will end in 'ate'.");
        expect(getFormulaHints("HClO", perchloricAcid, "acids")).toBe("Check the anion formula. If the name has the pattern of ____ic acid, without a 'hydro' prefix, then the anion will end in 'ate'.");
        expect(getFormulaHints("H/2/SO", sulfuricAcid, "acids")).toBe("Check the anion formula. If the name has the pattern of ____ic acid, without a 'hydro' prefix, then the anion will end in 'ate'.");
    });

    test("Ite anions", () => {
        // expect(getFormulaHints("HNO", nitrousAcid, "acids")).toBe("Check the anion formula. If the name has the pattern of ____ous acid, then the anion will end in 'ite'.");
        // expect(getFormulaHints("HClO/2/", hypochlorousAcid, "acids")).toBe("Check the anion formula. If the name has the pattern of ____ous acid, then the anion will end in 'ite'.");
        expect(getFormulaHints("H/2/SO", sulfurousAcid, "acids")).toBe("Check the anion formula. If the name has the pattern of ____ous acid, then the anion will end in 'ite'.");
    });

    test("Ide anions", () => {
        expect(getFormulaHints("HClO", hydrochloricAcid, "acids")).toBe("Check the anion formula. If the name has the pattern of hydro____ic acid, then the anion will end in 'ide'.");
        expect(getFormulaHints("HAs", hydrocyanicAcid, "acids")).toBe("Check the anion formula. If the name has the pattern of hydro____ic acid, then the anion will end in 'ide'.");
    });
});