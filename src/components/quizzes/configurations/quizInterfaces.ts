export interface NumberOfTypes {
    overall: number;
    main: number;
    transitionMetal: number;
    polyatomic: number;
    tmAndPoly: number;
    acids: number;
    molecular: number;
}

export interface FormulaStats {
    askedByType: NumberOfTypes;
    correctByType: NumberOfTypes;
    spaces: number;
    capitalization: number;
    elementSwaps: {
        AlAndAmmonium: number;
        NaAndS: number;
        KAndP: number;
        CoAndCu: number;
        MgAndMn: number;
    };
    parentheses: {
        needed: number;
        notNeeded: number;
        unpaired: number;
    };
    lcm: {
        needed: number;
        notNeeded: number;
    };
    oneAsSubscript: number;
    cationSubscript: number;
    anionSubscript: number;
    numNotInSubscript: number;
    cationFormula: {
        hydrogen: number;
        ammonium: number;
        monatomic: number;
    };
    anionFormula: {
        ide: number;
        bi: number;
        hypoIte: number;
        ite: number;
        ate: number;
        perAte: number;
        generalOxyanion: number;
    };
    greekPrefixes: {
        mono: number;
        di: number;
        tri: number;
        tetra: number;
        penta: number;
        hexa: number;
        hepta: number;
        octa: number;
        nona: number;
        deca: number;
    };
    acids: {
        hydroIc: number;
        ous: number;
        ic: number;
    };
}