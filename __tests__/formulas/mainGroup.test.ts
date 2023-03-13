import { describe, test, expect } from "@jest/globals";
import { getFormulaHints } from "../../src/components/compounds/helpers/getFormulaHints";

describe("Test hints for formulas with only main group ions.", () => {
    const sodiumIodide: string = "NaI";
    const potassiumOxide: string = "K/2/O";
    const magnesiumSulfide: string = "MgS";
    const bariumChloride: string = "BaCl/2/";
    const aluminumFluoride: string = "AlF/3/";
    const aluminumOxide: string = "Al/2/O/3/";
    const aluminumPhosphide: string = "AlP";
    const silverSulfide: string = "Ag/2/S";
    const zincOxide: string = "ZnO";
    const cadmiumNitride: string = "Cd/3/N/2/";

    test("Hints for the cation.", () => {
        expect(getFormulaHints("SI/2/", sodiumIodide, "ionic-main")).toBe("Check the formula for the cation.");
        expect(getFormulaHints("PO", potassiumOxide, "ionic-main")).toBe("Check the formula for the cation.");
        expect(getFormulaHints("MaS", magnesiumSulfide, "ionic-main")).toBe("Check the formula for the cation.");
    });

    test("Hints for the anion.", () => {
        expect(getFormulaHints("BaC/2/", bariumChloride, "ionic-main")).toBe("Check the formula for the anion.");
        expect(getFormulaHints("AlFl/3/", aluminumFluoride, "ionic-main")).toBe("Check the formula for the anion.");
        expect(getFormulaHints("Al/2/Ox/3/", aluminumOxide, "ionic-main")).toBe("Check the formula for the anion.");
    });

    test("Hints for the cation subscript.", () => {
        expect(getFormulaHints("Al/3/P/3/", aluminumPhosphide, "ionic-main")).toBe("The subscripts are not in the lowest whole number ratio.");
        expect(getFormulaHints("Al/3/P", aluminumPhosphide, "ionic-main")).toBe("Check the subscript for the cation.");
        expect(getFormulaHints("AgS/2/", silverSulfide, "ionic-main")).toBe("Check the subscript for the cation.");
    });

    test("Hints for the anion subscript.", () => {
        expect(getFormulaHints("Zn/2/O/2/", zincOxide, "ionic-main")).toBe("The subscripts are not in the lowest whole number ratio.");
        expect(getFormulaHints("ZnO/2/", zincOxide, "ionic-main")).toBe("Check the subscript for the anion.");
        expect(getFormulaHints("Cd/3/N", cadmiumNitride, "ionic-main")).toBe("Check the subscript for the anion.");
        expect(getFormulaHints("Cd/3/NI/2/", cadmiumNitride, "ionic-main")).toBe("Anion names ending in 'ide' are not polyatomic, except for cyanide and hydroxide.");
    });
});