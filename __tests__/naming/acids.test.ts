import { describe, test, expect } from "@jest/globals";
import { getNamingHints } from "../../src/components/compounds/helpers/getNamingHints";

describe("Acid Naming hints", () => {
    const acidIdeAnion = "hydroiodic acid";
    const acidIteAnion = "sulfurous acid";
    const acidAteAnion = "phosphoric acid";
    const compoundType = "acids";

    test("Acids with anions ending in '-ide'", () => {
        expect(getNamingHints("hydroiodic acid", acidIdeAnion, compoundType)).toBe("The name of the compound is correct.");

        expect(getNamingHints("", acidIdeAnion, compoundType)).toBe("Please enter a name for the compound.");

        expect(getNamingHints("Hydroiodic Acid", acidIdeAnion, compoundType)).toBe("The name of the compound should be written in lower case unless it is the first word in a sentence.");

        expect(getNamingHints("Hydroiodic acid", acidIdeAnion, compoundType)).toBe("The name of the compound should be written in lower case unless it is the first word in a sentence.");

        expect(getNamingHints("hydroiodicacid", acidIdeAnion, compoundType)).toBe("The name must have a space between the two parts of the name.");

        expect(getNamingHints("hydroiodic  acid", acidIdeAnion, compoundType)).toBe("There can only be one space between the two parts of the name.");

        expect(getNamingHints("hydro iodic acid", acidIdeAnion, compoundType)).toBe("There can only be two parts of a compound name.");

        expect(getNamingHints("hydrogen iodide", acidIdeAnion, compoundType)).toBe("The name of the compound should end with 'acid'. Use the acid naming rules.");

        expect(getNamingHints("iodic acid", acidIdeAnion, compoundType)).toBe("Acids are named depending on the suffix of the anion. If the anion ends with 'ide', the acid is named with the prefix 'hydro'.");

        expect(getNamingHints("iodous acid", acidIdeAnion, compoundType)).toBe("Acids are named depending on the suffix of the anion. If the anion ends with 'ide', the acid is named with the suffix 'ic acid'.");

        expect(getNamingHints("hydroiodous acid", acidIdeAnion, compoundType)).toBe("Acids are named depending on the suffix of the anion. If the anion ends with 'ide', the acid is named with the suffix 'ic acid'.");

        expect(getNamingHints("hydroiodidic acid", acidIdeAnion, compoundType)).toBe("The root name of the anion is incorrect. If the anion ends with 'ide', the acid should follow the format 'hydro (anion root name)ic acid'.");
    });

    test("Acids with anions ending in '-ite'", () => {
        expect(getNamingHints("sulfurous acid", acidIteAnion, compoundType)).toBe("The name of the compound is correct.");

        expect(getNamingHints("", acidIteAnion, compoundType)).toBe("Please enter a name for the compound.");

        expect(getNamingHints("Sulfurous Acid", acidIteAnion, compoundType)).toBe("The name of the compound should be written in lower case unless it is the first word in a sentence.");

        expect(getNamingHints("Sulfurous acid", acidIteAnion, compoundType)).toBe("The name of the compound should be written in lower case unless it is the first word in a sentence.");

        expect(getNamingHints("sulfurousacid", acidIteAnion, compoundType)).toBe("The name must have a space between the two parts of the name.");

        expect(getNamingHints("sulfurous  acid", acidIteAnion, compoundType)).toBe("There can only be one space between the two parts of the name.");

        expect(getNamingHints("hydrogen sulfuric acid", acidIteAnion, compoundType)).toBe("There can only be two parts of a compound name.");

        expect(getNamingHints("hydrogen sulfite", acidIteAnion, compoundType)).toBe("The name of the compound should end with 'acid'. Use the acid naming rules.");

        expect(getNamingHints("sulfuric acid", acidIteAnion, compoundType)).toBe("Acids are named depending on the suffix of the anion. If the anion ends with 'ite', the acid is named with the suffix 'ous acid'.");

        expect(getNamingHints("hydrosulfurous acid", acidIteAnion, compoundType)).toBe("Acids are named depending on the suffix of the anion. Only acids with anions ending in 'ide' should have a 'hydro' prefix.");

        expect(getNamingHints("sulfous acid", acidIteAnion, compoundType)).toBe("This anion has a root that does not follow the normal pattern. The root name of ions containing sulfide, sulfate, or sulfite is 'sulfur'.");

        expect(getNamingHints("nitrogenous acid", "nitrous acid", compoundType)).toBe("Acids are named depending on the suffix of the anion. If the anion ends with 'ite', the acid is named with the suffix 'ous acid'.");
    });

    test("Acids with anions ending in '-ate'", () => {
        expect(getNamingHints("phosphoric acid", acidAteAnion, compoundType)).toBe("The name of the compound is correct.");

        expect(getNamingHints("", acidAteAnion, compoundType)).toBe("Please enter a name for the compound.");

        expect(getNamingHints("Phosphoric Acid", acidAteAnion, compoundType)).toBe("The name of the compound should be written in lower case unless it is the first word in a sentence.");

        expect(getNamingHints("Phosphoric acid", acidAteAnion, compoundType)).toBe("The name of the compound should be written in lower case unless it is the first word in a sentence.");

        expect(getNamingHints("phosphoricacid", acidAteAnion, compoundType)).toBe("The name must have a space between the two parts of the name.");

        expect(getNamingHints("phosphoric  acid", acidAteAnion, compoundType)).toBe("There can only be one space between the two parts of the name.");

        expect(getNamingHints("hydrogen phosphoric acid", acidAteAnion, compoundType)).toBe("There can only be two parts of a compound name.");

        expect(getNamingHints("hydrogen phosphate", acidAteAnion, compoundType)).toBe("The name of the compound should end with 'acid'. Use the acid naming rules.");

        expect(getNamingHints("phosphorous acid", acidAteAnion, compoundType)).toBe("Acids are named depending on the suffix of the anion. If the anion ends with 'ate', the acid is named with the suffix 'ic acid'.");

        expect(getNamingHints("hydrophosphoric acid", acidAteAnion, compoundType)).toBe("Acids are named depending on the suffix of the anion. Only acids with anions ending in 'ide' should have a 'hydro' prefix.");

        expect(getNamingHints("phosphic acid", acidAteAnion, compoundType)).toBe("This anion has a root that does not follow the normal pattern. The root name of ions containing phosphide, phosphate, or phosphite is 'phosphor'.");

        expect(getNamingHints("carbic acid", "carbonic acid", compoundType)).toBe("Acids are named depending on the suffix of the anion. If the anion ends with 'ate', the acid is named with the suffix 'ic acid'.")
    });

});