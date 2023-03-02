import { describe, test, expect } from "@jest/globals";
import { getNamingHints } from "../../src/components/compounds/helpers/getNamingHints";

describe("Transition metal naming hints", () => {
    const compoundName = "lead(IV) oxide";
    const compoundType = "ionic-transition";

    test("Hint for: Correct name", () => {
        expect(getNamingHints("lead(IV) oxide", compoundName, compoundType)).toBe("The name of the compound is correct.");
    });

    test("Hint for: No user entered name", () => {
        expect(getNamingHints("", compoundName, compoundType)).toBe("Please enter a name for the compound.");
    });

    test("Hint for: parenthesis", () => {
        expect(getNamingHints("leadIV) oxide", compoundName, compoundType)).toBe("The name of the transition metal should contain a Roman numeral in parentheses after the cation without a space, followed by a space before the anion.");

        expect (getNamingHints("lead(IV oxide", compoundName, compoundType)).toBe("The name of the transition metal should contain a Roman numeral in parentheses after the cation without a space, followed by a space before the anion.");

        expect (getNamingHints("leadIV oxide", compoundName, compoundType)).toBe("The name of the transition metal should contain a Roman numeral in parentheses after the cation without a space, followed by a space before the anion.");
    })

    test("Hint for: Parentheses written first", () => {
        expect(getNamingHints("(IV)lead oxide", compoundName, compoundType)).toBe("The name of the cation should be written first.");
    });

    test("Hint for: Roman numeral correctness", () => {
        expect(getNamingHints("lead() oxide", compoundName, compoundType)).toBe("The Roman numeral indicating the cation's charge is missing.");

        expect(getNamingHints("lead(iv) oxide", compoundName, compoundType)).toBe("The Roman numeral indicating the cation's charge should be written in upper case.");

        expect(getNamingHints("lead(IIII) oxide", compoundName, compoundType)).toBe("The Roman numeral indicating the cation's charge is incorrect.");
    });

    test("Hint for: Incorrect cation name", () => {
        expect(getNamingHints("Lead(IV) oxide", compoundName, compoundType)).toBe("The name of the transition metal should be written in lower case. Capital letters should only be used for roman numerals.");

        expect(getNamingHints("lEad(IV) oxide", compoundName, compoundType)).toBe("The name of the transition metal should be written in lower case. Capital letters should only be used for roman numerals.");

        expect(getNamingHints("led(IV) oxide", compoundName, compoundType)).toBe("The name of the transition metal is incorrect. The cation is name of the element on the periodic table followed by the Roman numeral indicating the cation's charge.");
    });

    test("Hint for: Number and position of spaces", () => {
        expect(getNamingHints("lead (IV) oxide", compoundName, compoundType)).toBe("There should not be a space between the cation name and the Roman numeral in parentheses.");

        expect(getNamingHints("lead (IV)oxide", compoundName, compoundType)).toBe("There should not be a space between the cation name and the Roman numeral in parentheses.");

        expect(getNamingHints("lead (IV) oxide", compoundName, compoundType)).toBe("There should not be a space between the cation name and the Roman numeral in parentheses.");

        expect(getNamingHints("lead(IV)oxide", compoundName, compoundType)).toBe("There must be one space between the two parts of the name located between the Roman numerals in parentheses and the name of the anion.");

        expect(getNamingHints("lead(IV)  oxide", compoundName, compoundType)).toBe("There can only be one space between the two parts of the name located between the Roman numerals in parentheses and the name of the anion.");
    });

    test("Hint for: Incorrect anion name", () => {
        expect(getNamingHints("lead(IV)", compoundName, compoundType)).toBe("The name of the anion is missing.");

        expect(getNamingHints("lead(IV) Oxide", compoundName, compoundType)).toBe("The name of the anion should be written in lower case. Capital letters should only be used for roman numerals.");

        expect(getNamingHints("lead(IV) oXide", compoundName, compoundType)).toBe("The name of the anion should be written in lower case. Capital letters should only be used for roman numerals.");

        expect(getNamingHints("lead(IV) oxygen", compoundName, compoundType)).toBe("The name of the anion is incorrect.");
    });
    
});