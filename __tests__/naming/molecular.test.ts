import { describe, test, expect } from "@jest/globals";
import { getNamingHints } from "../../src/components/compounds/helpers/getNamingHints";

describe("Molecular naming hints", () => {
    const compoundType = "molecular";

    test("Hint for: Common hints", () => {
        const compoundName = "carbon dioxide";
        expect(getNamingHints("carbon dioxide", compoundName, compoundType)).toBe("The name of the compound is correct.");

        expect(getNamingHints("", compoundName, compoundType)).toBe("Please enter a name for the compound.");

        expect(getNamingHints("Carbon Dioxide", compoundName, compoundType)).toBe("The name of the compound should be written in lower case unless it is the first word in a sentence.");

        expect(getNamingHints("Carbon dioxide", compoundName, compoundType)).toBe("The name of the compound should be written in lower case unless it is the first word in a sentence.");

        expect(getNamingHints("carbondioxide", compoundName, compoundType)).toBe("The name must have a space between the two parts of the name.");

        expect(getNamingHints("carbon  dioxide", compoundName, compoundType)).toBe("There can only be one space between the two parts of the name.");

        expect(getNamingHints("carbon di oxide", compoundName, compoundType)).toBe("There can only be two parts of a compound name.");
    });

    test("Hints for: using 'mono' prefix", () => {
        expect(getNamingHints("monocarbon dioxide", "carbon dioxide", compoundType)).toBe("The prefix 'mono' should not be used for the first part of the name.");

        expect(getNamingHints("dihydrogen oxide", "dihydrogen monoxide", compoundType)).toBe("The prefix for a subscript of 1 should be used for the second part of the name.");

        expect(getNamingHints("monocarbon oxide", "carbon monoxide", compoundType)).toBe("The prefix 'mono' should not be used for the first part of the name.");

        expect(getNamingHints("carbon oxide", "carbon monoxide", compoundType)).toBe("The prefix for a subscript of 1 should be used for the second part of the name.");

        expect(getNamingHints("carbide monoxide", "carbon monoxide", compoundType)).toBe(`The name of the element from the periodic table is used after any Greek prefix for the first part of the name.`);

        expect(getNamingHints("carbon monoxygen", "carbon monoxide", compoundType)).toBe(`The Greek prefix for the second part is correct, however the name of the element should be the root of the name of the element with 'ide' as the suffix.`);

        expect(getNamingHints("carbon monooxide", "carbon monoxide", compoundType)).toBe("When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.");
    });

    test("Hints for: using 'di' prefix", () => {
        expect(getNamingHints("hydrogen monoxide", "dihydrogen monoxide", compoundType)).toBe("The prefix for a subscript of 2 should be used for the first part of the name.");

        expect(getNamingHints("carbon oxide", "carbon dioxide", compoundType)).toBe("The prefix for a subscript of 2 should be used for the second part of the name.");
    });

    test("Hints for: using 'tri' prefix", () => {
        expect(getNamingHints("traphosphorus heptoxide", "triphosphorus heptoxide", compoundType)).toBe("The prefix for a subscript of 3 should be used for the first part of the name.");

        expect(getNamingHints("sulfur oxide", "sulfur trioxide", compoundType)).toBe("The prefix for a subscript of 3 should be used for the second part of the name.");
    });

    test("Hints for: using 'tetra' prefix", () => {
        expect(getNamingHints("tricarbon decahydride", "tetracarbon decahydride", compoundType)).toBe("The prefix for a subscript of 4 should be used for the first part of the name.");

        expect(getNamingHints("carbon dichloride", "carbon tetrachloride", compoundType)).toBe("The prefix for a subscript of 4 should be used for the second part of the name.");

        expect(getNamingHints("dinitrogen tetraoxide", "dinitrogen tetroxide", compoundType)).toBe("When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.");

        expect(getNamingHints("dinitrogen tertoxide", "dinitrogen tetroxide", compoundType)).toBe("The prefix for a subscript of 4 should be used for the second part of the name.");
    });

    test("Hints for: using 'penta' prefix", () => {
        expect(getNamingHints("pentphosphorus decoxide", "pentaphosphorus decoxide", compoundType)).toBe("The prefix for a subscript of 5 should be used for the first part of the name.");

        expect(getNamingHints("dinitrogen oxide", "dinitrogen pentoxide", compoundType)).toBe("The prefix for a subscript of 5 should be used for the second part of the name.");

        expect(getNamingHints("dinitrogen pentaoxide", "dinitrogen pentoxide", compoundType)).toBe("When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.");

        expect(getNamingHints("dinitrogen pentchloride", "dinitrogen pentachloride", compoundType)).toBe("The prefix for a subscript of 5 should be used for the second part of the name.");
    });

    test("Hints for: using 'hexa' prefix", () => {
        expect(getNamingHints("hexcarbon decoxide", "hexacarbon decoxide", compoundType)).toBe("The prefix for a subscript of 6 should be used for the first part of the name.");

        expect(getNamingHints("dinitrogen oxide", "dinitrogen hexoxide", compoundType)).toBe("The prefix for a subscript of 6 should be used for the second part of the name.");

        expect(getNamingHints("dinitrogen hexaoxide", "dinitrogen hexoxide", compoundType)).toBe("When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.");

        expect(getNamingHints("triphosphorus hexchloride", "triphosphorus hexachloride", compoundType)).toBe("The prefix for a subscript of 6 should be used for the second part of the name.");
    });

    test("Hints for: using 'hepta' prefix", () => {
        expect(getNamingHints("triiodide heptchloride", "triiodide heptachloride", compoundType)).toBe("The prefix for a subscript of 7 should be used for the second part of the name.");

        expect(getNamingHints("triphosphorus heptaoxide", "triphosphorus heptoxide", compoundType)).toBe("When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.");

        expect(getNamingHints("triiodine octoxide", "triiodine heptoxide", compoundType)).toBe("The prefix for a subscript of 7 should be used for the second part of the name.");
    });

    test("Hints for: using 'octa' prefix", () => {
        expect(getNamingHints("tricarbon octhydride", "tricarbon octahydride", compoundType)).toBe("The prefix for a subscript of 8 should be used for the second part of the name.");

        expect(getNamingHints("tetraphosphorus octaoxide", "tetraphosphorus octoxide", compoundType)).toBe("When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.");

        expect(getNamingHints("pentaphosphorus nonoxide", "pentaphosphorus octoxide", compoundType)).toBe("The prefix for a subscript of 8 should be used for the second part of the name.");
    });

    test("Hints for: using 'nona' prefix", () => {
        expect(getNamingHints("tetraphosphorus nonchloride", "tetraphosphorus nonachloride", compoundType)).toBe("The prefix for a subscript of 9 should be used for the second part of the name.");

        expect(getNamingHints("tetraphosphorus nonaoxide", "tetraphosphorus nonoxide", compoundType)).toBe("When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.");

        expect(getNamingHints("tetraphosphorus decoxide", "tetraphosphorus nonoxide", compoundType)).toBe("The prefix for a subscript of 9 should be used for the second part of the name.");
    });

    test("Hints for: using 'deca' prefix", () => {
        expect(getNamingHints("tetracarbon dechydride", "tetracarbon decahydride", compoundType)).toBe("The prefix for a subscript of 10 should be used for the second part of the name.");

        expect(getNamingHints("pentaphosphorus decaoxide", "pentaphosphorus decoxide", compoundType)).toBe("When the Greek prefix ends in 'a' or 'o' and the element name begins with an 'o', remove the last letter of the prefix.");

        expect(getNamingHints("tetraphosphorus nonoxide", "tetraphosphorus decoxide", compoundType)).toBe("The prefix for a subscript of 10 should be used for the second part of the name.");
    });
});