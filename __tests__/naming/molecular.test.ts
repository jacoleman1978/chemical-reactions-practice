import { describe, test, expect } from "@jest/globals";
import { getNamingHints } from "../../src/components/compounds/helpers/getNamingHints";

describe("Molecular naming hints", () => {
    const compoundName = "lead(IV) oxide";
    const compoundType = "ionic-transition";

    test("Placeholder", () => {
        expect(true).toBe(true);
    });
});