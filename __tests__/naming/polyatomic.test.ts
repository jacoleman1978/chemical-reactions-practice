import { describe, test, expect } from "@jest/globals";
import { polyatomicIonData } from "../../src/components/ions/configurations/polyatomicIonData";
import { makeIonicCompound } from "../../src/components/compounds/helpers/makeIonicCompound";
import { getNamingHints } from "../../src/components/compounds/helpers/getNamingHints";
import { Ion } from "../../src/components/ions/configurations/interfaces";
import { IonicCompound } from "../../src/components/compounds/configurations/interfaces";

describe("Polyatomic naming", () => {
    const ammoniumIon: Ion = polyatomicIonData.ammonium;
    const sulfiteIon: Ion = polyatomicIonData.sulfite;
    const compound: IonicCompound = makeIonicCompound("ionic-polyatomic", ammoniumIon, sulfiteIon);

    test("Build ammonium sulfite with correct name", () => {
        expect(compound.compoundName).toBe("ammonium sulfite");
    });

    test("Hint for: Correct name", () => {
        expect(getNamingHints("ammonium sulfite", compound.compoundName, compound.compoundType)).toBe("The name of the compound is correct.");
    });

    test("Hint for: No user entered name", () => {
        expect(getNamingHints("", compound.compoundName, compound.compoundType)).toBe("Please enter a name for the compound.");
    });

    test("Hint for: User entered name with capital letters", () => {
        expect(getNamingHints("Ammonium SulfiTe", compound.compoundName, compound.compoundType)).toBe("The name of the compound should be written in lower case unless it is the first word in a sentence.");
    });

    test("Hint for: User entered name with no space", () => {
        expect(getNamingHints("ammoniumsulfite", compound.compoundName, compound.compoundType)).toBe("The name must have a space between the two parts of the name.");
    });

    test("Hint for: User entered name with more than one space", () => {
        expect(getNamingHints("ammonium  sulfite", compound.compoundName, compound.compoundType)).toBe("There can only be one space between the two parts of the name.");
    });

    test("Hint for: Incorrect cation name", () => {
        expect(getNamingHints("aluminum sulfite", compound.compoundName, compound.compoundType)).toBe("The name of the cation is incorrect. It should be the name of the element on the periodic table.");
    });

    test("Hint for: Incorrect anion suffix", () => {
        expect(getNamingHints("ammonium sulfate", compound.compoundName, compound.compoundType)).toBe("The root name of the anion is correct. However, the suffix is incorrect.");
    });

    test("Hint for: Incorrect anion root", () => {
        expect(getNamingHints("ammonium sulfurite", compound.compoundName, compound.compoundType)).toBe("The root name of the anion is incorrect.");
    });
});