import { describe, test, expect } from "@jest/globals";
import { getNamingHints } from "../../src/components/compounds/helpers/getNamingHints";

describe("Polyatomic naming", () => {
    const compoundName = "ammonium sulfite";
    const compoundType = "ionic-polyatomic";

    test("Hint for: Correct name", () => {
        expect(getNamingHints("ammonium sulfite", compoundName, compoundType)).toBe("The name of the compound is correct.");
    });

    test("Hint for: No user entered name", () => {
        expect(getNamingHints("", compoundName, compoundType)).toBe("Please enter a name for the compound.");
    });

    test("Hint for: User entered name with capital letters", () => {
        expect(getNamingHints("Ammonium SulfiTe", compoundName, compoundType)).toBe("The name of the compound should be written in lower case unless it is the first word in a sentence.");
    });

    test("Hint for: User entered name with no space", () => {
        expect(getNamingHints("ammoniumsulfite", compoundName, compoundType)).toBe("The name must have a space between the two parts of the name.");
    });

    test("Hint for: User entered name with more than one space", () => {
        expect(getNamingHints("ammonium  sulfite", compoundName, compoundType)).toBe("There can only be one space between the two parts of the name.");
    });

    test("Hint for: Incorrect cation name", () => {
        expect(getNamingHints("aluminum sulfite", compoundName, compoundType)).toBe("The name of the cation is incorrect. It should be the name of the element on the periodic table.");
    });

    test("Hint for: Incorrect anion suffix", () => {
        expect(getNamingHints("ammonium sulfate", compoundName, compoundType)).toBe("The root name of the anion is correct. However, the suffix is incorrect.");
    });

    test("Hint for: Incorrect anion root", () => {
        expect(getNamingHints("ammonium sulfurite", compoundName, compoundType)).toBe("The root name of the anion is incorrect.");
    });
});