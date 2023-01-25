export const getTargetCoefficients = (R1: number, R2: number, P1: number, P2: number) => {
    return {
        R1: (R1 === 1 ? "" : `${R1}`),
        R2: (R2 === 1 ? "" : `${R2}`),
        P1: (P1 === 1 ? "" : `${P1}`),
        P2: (P2 === 1 ? "" : `${P2}`),
    }
};