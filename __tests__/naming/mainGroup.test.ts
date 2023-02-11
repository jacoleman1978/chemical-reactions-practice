import { describe, test, expect } from "@jest/globals";
import { makeNewIon } from "../../src/components/ions/helpers/makeNewIon";
import { makeIonicCompound } from "../../src/components/compounds/helpers/makeIonicCompound";
import { getNamingHints } from "../../src/components/compounds/helpers/getNamingHints";
import { Ion } from "../../src/components/ions/configurations/interfaces";
import { IonicCompound } from "../../src/components/compounds/configurations/interfaces";

describe("Main group naming", () => {
    const sodiumIon: Ion = makeNewIon("Na");
    const phosphideIon: Ion = makeNewIon("P");
    const compound: IonicCompound = makeIonicCompound("ionic-main", sodiumIon, phosphideIon);

    test("Build sodium phosphide with correct name", () => {
        expect(compound.compoundName).toBe("sodium phosphide");
    });

    test("Hint for: Correct name", () => {
        expect(getNamingHints("sodium phosphide", compound.compoundName, compound.compoundType)).toBe("The name of the compound is correct.");
    });

    test("Hint for: No user entered name", () => {
        expect(getNamingHints("", compound.compoundName, compound.compoundType)).toBe("Please enter a name for the compound.");
    });

    test("Hint for: User entered name with capital letters", () => {
        expect(getNamingHints("Sodium Phosphide", compound.compoundName, compound.compoundType)).toBe("The name of the compound should be written in lower case unless it is the first word in a sentence.");
    });

    test("Hint for: User entered name with no space", () => {
        expect(getNamingHints("sodiumphosphide", compound.compoundName, compound.compoundType)).toBe("The name must have a space between the two parts of the name.");
    });

    test("Hint for: User entered name with more than one space", () => {
        expect(getNamingHints("sodium  phosphide", compound.compoundName, compound.compoundType)).toBe("There can only be one space between the two parts of the name.");
    });

    test("Hint for: Incorrect cation name", () => {
        expect(getNamingHints("sodum phosphide", compound.compoundName, compound.compoundType)).toBe("The name of the cation is incorrect. It should be the name of the element on the periodic table.");
    });

    test("Hint for: Incorrect anion name", () => {
        expect(getNamingHints("sodium phosfide", compound.compoundName, compound.compoundType)).toBe("The name of the anion is incorrect. It should be the root name of the element on the periodic table with the suffix -ide.");
    });
});