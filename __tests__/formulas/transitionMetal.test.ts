import { describe, test, expect } from "@jest/globals";
import { getFormulaHints } from "../../src/components/compounds/helpers/getFormulaHints";

describe("Test hints for formulas with transition metals", () => {
    // "ionic-transition" compound types
    const copperICloride: string = "CuCl";
    const copperISulfide: string = "Cu/2/S";
    const copperIIIodide: string = "CuI/2/";
    const copperIIOxide: string = "CuO";
    const ironIIIOxide: string = "Fe/2/O/3/";
    const leadIVOxide: string = "PbO/2/";

    const compoundList: string[] = [copperICloride, copperISulfide, copperIIIodide, copperIIOxide, ironIIIOxide, leadIVOxide];

    test("Formula is correct", () => {
        compoundList.forEach(compound => {
            expect(getFormulaHints(compound, compound, "ionic-transition")).toBe("The formula of the compound is correct.");
        });
    });

    test("No formula entered", () => {
        compoundList.forEach(compound => {
            expect(getFormulaHints("", compound, "ionic-transition")).toBe("Please enter a formula for the compound.");
        });
    });

    test("Remove spaces in formula", () => {
        compoundList.forEach(compound => {
            const length: number = compound.length;
            let compoundWithSpace: string = "";

            if (length > 1) {
                compoundWithSpace = `${compound.slice(0, Math.floor(length / 2))} ${compound.slice(Math.floor(length / 2))}`
            } else {
                compoundWithSpace = `${compound} `;
            }

            expect(getFormulaHints(compoundWithSpace, compound, "ionic-transition")).toBe("There should be no spaces in the formula.");
        });
    });

    test("Subscripts are in LCM", () => {
        expect(getFormulaHints("Cu/2/Cl/2/", copperICloride, "ionic-transition")).toBe("The subscripts are not in the lowest whole number ratio.");

        expect(getFormulaHints("Cu/4/S/2/", copperISulfide, "ionic-transition")).toBe("The subscripts are not in the lowest whole number ratio.");

        expect(getFormulaHints("Cu/2/I/4/", copperIIIodide, "ionic-transition")).toBe("The subscripts are not in the lowest whole number ratio.");

        expect(getFormulaHints("Fe/4/O/6/", ironIIIOxide, "ionic-transition")).toBe("The subscripts are not in the lowest whole number ratio.");

        expect(getFormulaHints("Pb/2/O/4/", leadIVOxide, "ionic-transition")).toBe("The subscripts are not in the lowest whole number ratio.");
    });

    test("Cation is a transition metal", () => {
        expect(getFormulaHints("CI/2/", copperIIIodide, "ionic-transition")).toBe("Check the formula for the cation. A name with parentheses and Roman numerals indicates a transition metal cation.");

        expect(getFormulaHints("CoI/2/", copperIIIodide, "ionic-transition")).toBe("Check the formula for the cation.");
    });

    test("Anions with 'ionic-transition'", () => {
        expect(getFormulaHints("CuIO/2/", copperIIIodide, "ionic-transition")).toBe("Any ion name ending in '-ide', indicates a monatomic anion, except for hydroxide or cyanide. Check the formula for the anion.");

        expect(getFormulaHints("CuCl/2/", copperIIIodide, "ionic-transition")).toBe("Check the formula for the anion.");
    });

    test("Check subscripts", () => {
        expect(getFormulaHints("Cu/2/I", copperIIIodide, "ionic-transition")).toBe("Check the subscript for the cation.");

        expect(getFormulaHints("CuI", copperIIIodide, "ionic-transition")).toBe("Check the subscript for the anion. Keep in mind that the Roman numeral after the cation name indicates the charge of the cation and is frequently the subscript for the anion.");

        expect(getFormulaHints("Cu/2/I/4/", copperIIIodide, "ionic-transition")).toBe("The subscripts are not in the lowest whole number ratio.");
    });
});