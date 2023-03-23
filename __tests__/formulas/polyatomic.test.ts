import { describe, test, expect } from "@jest/globals";
import { getFormulaHints } from "../../src/components/compounds/helpers/getFormulaHints";
import { splitFormula } from "../../src/components/compounds/helpers/splitFormula";

describe("Test hints for formulas with polyatomic ions", () => {
    // "ionic-polyatomic" compound types
    const ammoniumSulfide: string = "(NH/4/)/2/S";
    const ammoniumSulfate: string = "(NH/4/)/2/SO/4/";
    const calciumPhosphate: string = "Ca/3/(PO/4/)/2/";
    const sodiumPhosphate: string = "Na/2/(PO/4/)/3/";
    const ammoniumChloride: string = "NH/4/Cl";

    // "ionic-mixed" compound type
    const ironIIISulfite: string = "Fe/3/(SO/3/)/2/";

    const compoundList: string[] = [ammoniumSulfide, ammoniumSulfate, calciumPhosphate, ironIIISulfite, sodiumPhosphate, ammoniumChloride];

    test("Split ammonium chloride formula into parts", () => {
        expect(splitFormula(ammoniumChloride, "ionic-polyatomic")).toStrictEqual(["NH/4/", "1", "Cl", "1"]);
    });

    test("Formula is correct", () => {
        compoundList.forEach(compound => {
            if (compound === ironIIISulfite) {
                expect(getFormulaHints(compound, compound, "ionic-mixed")).toBe("The formula of the compound is correct.");
            } else {
                expect(getFormulaHints(compound, compound, "ionic-polyatomic")).toBe("The formula of the compound is correct.");
            }
        });
    });

    test("No formula entered", () => {
        compoundList.forEach(compound => {
            if (compound === ironIIISulfite) {
                expect(getFormulaHints("", compound, "ionic-mixed")).toBe("Please enter a formula for the compound.");
            } else {
                expect(getFormulaHints("", compound, "ionic-polyatomic")).toBe("Please enter a formula for the compound.");
            }
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

            if (compound === ironIIISulfite) {
                expect(getFormulaHints(compoundWithSpace, compound, "ionic-mixed")).toBe("There should be no spaces in the formula.");
            } else {
                expect(getFormulaHints(compoundWithSpace, compound, "ionic-polyatomic")).toBe("There should be no spaces in the formula.");
            }
        });
    });

    test("Hints for ammonium sulfide", () => {
        const compoundFormula: string = "(NH/4/)/2/S";

        expect(getFormulaHints("2(NH/4/)S", compoundFormula, "ionic-polyatomic")).toBe("Numbers are always written as subscripts after its element.");

        expect(getFormulaHints("(NH/4/)2/S", compoundFormula, "ionic-polyatomic")).toBe("Subscripts must be surrounded by '/' characters.");

        expect(getFormulaHints("(NH/4/)/2/S/1/", compoundFormula, "ionic-polyatomic")).toBe("Subscripts of 1 are never written.");

        expect(getFormulaHints("(NH/4/)/3/S", compoundFormula, "ionic-polyatomic")).toBe("Check the subscript for the cation.");

        expect(getFormulaHints("(NH/4/)/2/S/3/", compoundFormula, "ionic-polyatomic")).toBe("Check the subscript for the anion.");

        expect(getFormulaHints("(AlH/4/)/2/S", compoundFormula, "ionic-polyatomic")).toBe("Check the formula for the cation.");

        expect(getFormulaHints("(NH/3/)/2/S", compoundFormula, "ionic-polyatomic")).toBe("Check the formula for the cation.");

        expect(getFormulaHints("(NH/4/)/2/Se", compoundFormula, "ionic-polyatomic")).toBe("Check the formula for the anion.");

        expect(getFormulaHints("NH/3/)/2/S", compoundFormula, "ionic-polyatomic")).toBe("Parentheses come in pairs. You are missing an opening parenthesis.");

        expect(getFormulaHints("(NH/3//2/S", compoundFormula, "ionic-polyatomic")).toBe("Two subscripts can not be written next to each other. Usually this can be fixed by putting the polyatomic ion in parentheses.");

        expect(getFormulaHints("(NH/3/2/S", compoundFormula, "ionic-polyatomic")).toBe("Two subscripts can not be written next to each other. Usually this can be fixed by putting the polyatomic ion in parentheses.");

        expect(getFormulaHints("(NH/4/)/4/S/2/", compoundFormula, "ionic-polyatomic")).toBe("The subscripts are not in the lowest whole number ratio.");
    });

    test("Hints for ammonium sulfate", () => {
        const compoundFormula: string = "(NH/4/)/2/SO/4/";

        expect(getFormulaHints("2(NH/4/)SO/4/", compoundFormula, "ionic-polyatomic")).toBe("Numbers are always written as subscripts after its element.");

        expect(getFormulaHints("(NH/4/)/2/SO/4/1/", compoundFormula, "ionic-polyatomic")).toBe("Subscripts of 1 are never written.");

        expect(getFormulaHints("(NH/4/)/3/SO/4/", compoundFormula, "ionic-polyatomic")).toBe("Check the subscript for the cation.");

        expect(getFormulaHints("(NH/4/)/2/SO/4//3/", compoundFormula, "ionic-polyatomic")).toBe("Two subscripts can not be written next to each other. Usually this can be fixed by putting the polyatomic ion in parentheses.");

        expect(getFormulaHints("(AlH/4/)/2/SO/4/", compoundFormula, "ionic-polyatomic")).toBe("Check the formula for the cation.");

        expect(getFormulaHints("(NH/4/)/2/SO/3/", compoundFormula, "ionic-polyatomic")).toBe("Check the number of oxygens in the formula using the oxyanion naming pattern.");

        expect(getFormulaHints("(NH/4/)/2/SeO/4/", compoundFormula, "ionic-polyatomic")).toBe("Check the formula for the anion.");

        expect(getFormulaHints("(NH/4/)/4/(SeO/4/)/2/", compoundFormula, "ionic-polyatomic")).toBe("The subscripts are not in the lowest whole number ratio.");
    });

    test("Hints for calcium phosphate", () => {
        const compoundFormula: string = "Ca/3/(PO/4/)/2/";

        expect(getFormulaHints("Ca/1/(PO/4/)/2/", compoundFormula, "ionic-polyatomic")).toBe("Subscripts of 1 are never written.");

        expect(getFormulaHints("Ca/3/(PO/3/)/2/", compoundFormula, "ionic-polyatomic")).toBe("Check the number of oxygens in the formula using the oxyanion naming pattern.");

        expect(getFormulaHints("Ca/3/(PO/4/)/4/", compoundFormula, "ionic-polyatomic")).toBe("Check the subscript for the anion.");

        expect(getFormulaHints("Ca/3/PO/4//2/", compoundFormula, "ionic-polyatomic")).toBe("Two subscripts can not be written next to each other. Usually this can be fixed by putting the polyatomic ion in parentheses.");

        expect(getFormulaHints("Ca/2/(PO/4/)/3/", compoundFormula, "ionic-polyatomic")).toBe("Check the subscript for the cation.");

        expect(getFormulaHints("C/3/(PO/4/)/2/", compoundFormula, "ionic-polyatomic")).toBe("Check the formula for the cation.");

        expect(getFormulaHints("Ca/3/PO/4/)/2/", compoundFormula, "ionic-polyatomic")).toBe("Parentheses come in pairs. You are missing an opening parenthesis.");

        expect(getFormulaHints("Ca/3/(PO/4/", compoundFormula, "ionic-polyatomic")).toBe("Parentheses come in pairs. You are missing a closing parenthesis.");

        expect(getFormulaHints("Ca/3/(PO/4//2/", compoundFormula, "ionic-polyatomic")).toBe("Two subscripts can not be written next to each other. Usually this can be fixed by putting the polyatomic ion in parentheses.");

        expect(getFormulaHints("Ca/6/(PO/4/)/4/", compoundFormula, "ionic-polyatomic")).toBe("The subscripts are not in the lowest whole number ratio.");

        expect(getFormulaHints("Ca3(PO/4/)/2/", compoundFormula, "ionic-polyatomic")).toBe("Numbers should be written as subscripts, surrounded by '/'.");

        expect(getFormulaHints("(Ca)/3/(PO/4/)/2/", compoundFormula, "ionic-polyatomic")).toBe("Only polyatomic ions should be surrounded by parentheses.");
    });

    test("Hints for iron(III) sulfite", () => {
        const compoundFormula: string = "Fe/2/(SO/3/)/3/";

        expect(getFormulaHints("Fe/1/(SO/3/)/3/", compoundFormula, "ionic-mixed")).toBe("Subscripts of 1 are never written.");

        expect(getFormulaHints("Fe/2/(SO/3/)/4/", compoundFormula, "ionic-mixed")).toBe("The subscripts are not in the lowest whole number ratio.");

        expect(getFormulaHints("Fe/2/PO/4//3/", compoundFormula, "ionic-mixed")).toBe("Two subscripts can not be written next to each other. Usually this can be fixed by putting the polyatomic ion in parentheses.");

        expect(getFormulaHints("Fe/3/(SO/3/)/2/", compoundFormula, "ionic-mixed")).toBe("Check the subscript for the cation.");

        expect(getFormulaHints("F/2/(SO/3/)/3/", compoundFormula, "ionic-mixed")).toBe("Check the formula for the cation. The symbol is based on its Latin name, not its English name.");

        expect(getFormulaHints("Fe/2/(SO/4/)/3/", compoundFormula, "ionic-mixed")).toBe("Check the number of oxygens in the formula using the oxyanion naming pattern.");

        expect(getFormulaHints("Fe/2/(SeO/3/)/3/", compoundFormula, "ionic-mixed")).toBe("Check the formula for the anion.");

        expect(getFormulaHints("Fe/4/(SO/3/)/6/", compoundFormula, "ionic-mixed")).toBe("The subscripts are not in the lowest whole number ratio.");
    });

    test("Hints for sodium phosphate", () => {
        const compoundFormula: string = "Na/3/PO/4/";

        expect(getFormulaHints("Na/3/PO/4//1/", compoundFormula, "ionic-polyatomic")).toBe("Subscripts of 1 are never written.");

        expect(getFormulaHints("Na/3/(PO/4/)", compoundFormula, "ionic-polyatomic")).toBe("There should not be parentheses. Parentheses are only used for compounds with more than one of a polyatomic ion.");

        expect(getFormulaHints("(Na)/3/PO/4/", compoundFormula, "ionic-polyatomic")).toBe("There should not be parentheses. Parentheses are only used for compounds with more than one of a polyatomic ion.");
    });

    test("Hints for sodium bicarbonate", () => {
        const compoundFormula: string = "NaHCO/3/";

        expect(getFormulaHints("NaCO/3/", compoundFormula, "ionic-polyatomic")).toBe("Anion names starting with the 'bi' prefix indicate that the anion has an 'H' at the beginning of its formula. Please do not confuse it with the Greek prefix 'di' for molecular compounds.");
    });

    test("Hints for oxyanion naming pattern", () => {
        const compoundFormula: string = "Na/2/SO/3/";

        expect(getFormulaHints("Na/2/S", compoundFormula, "ionic-polyatomic")).toBe("Any ion name ending in '-ite' or '-ate', indicates a polyatomic anion. Check the formula for the anion.");
    });
});