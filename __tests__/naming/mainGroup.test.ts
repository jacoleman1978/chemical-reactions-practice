import { describe, test, expect } from "@jest/globals";
import { getNamingHints } from "../../src/components/compounds/helpers/getNamingHints";

describe("Main group naming", () => {
    const compoundName = "sodium phosphide";
    const compoundType = "ionic-main";

    test("Hint for: Correct name", () => {
        expect(getNamingHints("sodium phosphide", compoundName, compoundType)).toBe("The name of the compound is correct.");
    });

    test("Hint for: No user entered name", () => {
        expect(getNamingHints("", compoundName, compoundType)).toBe("Please enter a name for the compound.");
    });

    test("Hint for: User entered name with capital letters", () => {
        expect(getNamingHints("Sodium Phosphide", compoundName, compoundType)).toBe("The name of the compound should be written in lower case unless it is the first word in a sentence.");
    });

    test("Hint for: User entered name with no space", () => {
        expect(getNamingHints("sodiumphosphide", compoundName, compoundType)).toBe("The name must have a space between the two parts of the name.");
    });

    test("Hint for: User entered name with more than one space", () => {
        expect(getNamingHints("sodium  phosphide", compoundName, compoundType)).toBe("There can only be one space between the two parts of the name.");
    });

    test("Hint for: Incorrect cation name", () => {
        expect(getNamingHints("sodum phosphide", compoundName, compoundType)).toBe("The name of the cation is incorrect. It should be the name of the element on the periodic table.");
    });

    test("Hint for: Incorrect anion name", () => {
        expect(getNamingHints("sodium phosfide", compoundName, compoundType)).toBe("The name of the anion is incorrect. It should be the root name of the element on the periodic table with the suffix -ide.");
    });
});