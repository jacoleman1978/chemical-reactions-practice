import { describe, test, expect } from "@jest/globals";
import { getFormulaHints } from "../../src/components/compounds/helpers/getFormulaHints";
import { convertToGreekPrefix, getMolecularFormulaHints } from "../../src/components/compounds/helpers/getMolecularFormulaHints";

describe("Test hints for formulas with molecular compounds.", () => {
    const carbonMonoxide: string = "CO";
    const carbonDioxide: string = "CO/2";
    const dinitrogenPentoxide: string = "N/2/O/5";
    const triphosphorusHeptoxide: string = "P/3/O/7";
    const arsenicHexafluoride: string = "AsF/6/";
    const tricarbonOctahydride: string = "C/3/H/8";
    const tetraphosphorusNonachloride: string = "P/4/Cl/9/";
    const pentaphsophorusDecoxide: string = "P/5/O/10";

    test("Convert number to Greek prefix", () => {
        expect(convertToGreekPrefix("1")).toBe("mono");
        expect(convertToGreekPrefix("2")).toBe("di");
        expect(convertToGreekPrefix("3")).toBe("tri");
        expect(convertToGreekPrefix("4")).toBe("tetra");
        expect(convertToGreekPrefix("5")).toBe("penta");
        expect(convertToGreekPrefix("6")).toBe("hexa");
        expect(convertToGreekPrefix("7")).toBe("hepta");
        expect(convertToGreekPrefix("8")).toBe("octa");
        expect(convertToGreekPrefix("9")).toBe("nona");
        expect(convertToGreekPrefix("10")).toBe("deca");
        expect(convertToGreekPrefix("11")).toBe("");
    });

    test("Correct formula with getMolecularFormulaHints", () => {
        expect(getMolecularFormulaHints("CO", carbonMonoxide)).toBe("");
    });

    test("Hints for first element.", () => {
        expect(getFormulaHints("CaO", carbonMonoxide, "molecular")).toBe("Check the formula for the first element.");
        expect(getFormulaHints("ClO/2/", carbonDioxide, "molecular")).toBe("Check the formula for the first element.");
        expect(getFormulaHints("Ni/2/Os/5/", dinitrogenPentoxide, "molecular")).toBe("Check the formula for the first element.");
        expect(getFormulaHints("Po/3/O/6/", triphosphorusHeptoxide, "molecular")).toBe("Check the formula for the first element.");
        expect(getFormulaHints("AtF/6/", arsenicHexafluoride, "molecular")).toBe("Check the formula for the first element.");
        expect(getFormulaHints("Co/3/H/8/", tricarbonOctahydride, "molecular")).toBe("Check the formula for the first element.");
    });

    test("Hints for second element.", () => {
        expect(getFormulaHints("COs", carbonMonoxide, "molecular")).toBe("Check the formula for the second element.");
        expect(getFormulaHints("COs/2/", carbonDioxide, "molecular")).toBe("Check the formula for the second element.");
        expect(getFormulaHints("N/2/Os/4/", dinitrogenPentoxide, "molecular")).toBe("Check the formula for the second element.");
        expect(getFormulaHints("P/3/Os/6/", triphosphorusHeptoxide, "molecular")).toBe("Check the formula for the second element.");
    });

    test("Hints for first subscript", () => {
        expect(getFormulaHints("C/2/O", carbonMonoxide, "molecular")).toBe("When no Greek prefix is present for the first element in a molecular compound, that indicates that there is only one of that element. Remove the subscript for the first element.");
        expect(getFormulaHints("C/2/O", carbonDioxide, "molecular")).toBe("The Greek prefixes indicate how many of the element directly after it is in the compound. The prefix is NOT the charge.");
        expect(getFormulaHints("NO/4/", dinitrogenPentoxide, "molecular")).toBe("The Greek prefix for the first element indicates what number to use for the subscript. The prefix 'di' does not equal 1.");
        expect(getFormulaHints("P/2/O/6/", triphosphorusHeptoxide, "molecular")).toBe("The Greek prefix for the first element indicates what number to use for the subscript. The prefix 'tri' does not equal 2.");
        expect(getFormulaHints("P/2/Os/6/", triphosphorusHeptoxide, "molecular")).toBe("Check the formula for the second element.");
        expect(getFormulaHints("As/2/F/5/", arsenicHexafluoride, "molecular")).toBe("When no Greek prefix is present for the first element in a molecular compound, that indicates that there is only one of that element. Remove the subscript for the first element.");
        expect(getFormulaHints("P/3/Cl/9/", tetraphosphorusNonachloride, "molecular")).toBe("The Greek prefix for the first element indicates what number to use for the subscript. The prefix 'tetra' does not equal 3.");
        expect(getFormulaHints("P/4/O/9/", pentaphsophorusDecoxide, "molecular")).toBe("The Greek prefix for the first element indicates what number to use for the subscript. The prefix 'penta' does not equal 4.");
    });

    test("Hints for second subscript", () => {
        expect(getFormulaHints("CO/2/", carbonMonoxide, "molecular")).toBe("The Greek prefix for the second element indicates what number to use for the subscript. The prefix 'mono' does not equal 2.");
        expect(getFormulaHints("N/2/O/4/", dinitrogenPentoxide, "molecular")).toBe("The Greek prefix for the second element indicates what number to use for the subscript. The prefix 'penta' does not equal 4.");
        expect(getFormulaHints("P/3/O/6/", triphosphorusHeptoxide, "molecular")).toBe("The Greek prefix for the second element indicates what number to use for the subscript. The prefix 'hepta' does not equal 6.");
        expect(getFormulaHints("AsF/7/", arsenicHexafluoride, "molecular")).toBe("The Greek prefix for the second element indicates what number to use for the subscript. The prefix 'hexa' does not equal 7.");
        expect(getFormulaHints("C/3/H/7/", tricarbonOctahydride, "molecular")).toBe("The Greek prefix for the second element indicates what number to use for the subscript. The prefix 'octa' does not equal 7.");
        expect(getFormulaHints("P/4/Cl/19/", tetraphosphorusNonachloride, "molecular")).toBe("The Greek prefix for the second element indicates what number to use for the subscript. The prefix 'nona' does not equal 19.");
        expect(getFormulaHints("P/5/O/11/", pentaphsophorusDecoxide, "molecular")).toBe("The Greek prefix for the second element indicates what number to use for the subscript. The prefix 'deca' does not equal 11.");
    });
});