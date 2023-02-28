import { useState, useCallback } from 'react';
import { UseCoefficientInputs, CoefficientType } from './configurations/types';
import { CoefficientInputs, BackgroundColorStyle } from './configurations/interfaces';
import { Equation } from "../components/chemical-equations/configurations/equationInterfaces";

// Used to keep track of state for user-entered coefficients for balancing chemical equation, including the current background color for the input field
export const useCoefficientInputs = (): UseCoefficientInputs => {
    const [coefficientInputs, setCoefficientInputs] = useState<CoefficientInputs>({
        R1: "",
        R2: "",
        P1: "",
        P2: "",
    });
    const [inputColor, setInputColor] = useState<BackgroundColorStyle>({backgroundColor: "lightgray"});

    // Updates the state for the coefficient inputs, either setting all to the same value or updating the specific coefficient type
    const handleCoefficientInputs = useCallback((coefficientType: CoefficientType, coefficient: string): void => {
        if (coefficientType === "all") {
            setCoefficientInputs({
                R1: coefficient,
                R2: coefficient,
                P1: coefficient,
                P2: coefficient,
            });

        } else {
            setCoefficientInputs(coefficientInputs => {return {
                ...coefficientInputs,
                [coefficientType]: coefficient,
            }});
        }

        // Updates the background color of the input field to lightgray when the user starts typing
        setInputColor({backgroundColor: "lightgray"});
    }, []) 

    // Updates the background color of the input field to palegreen if the user has entered the correct coefficients, or lightpink if the user has entered the incorrect coefficients
    const handleUpdateInputColor = useCallback((coefficientInputs: CoefficientInputs, equation: Equation): void => {
        const { R1, R2, P1, P2 } = equation;
        const R1TargetCoefficient = R1.targetCoefficient === 1 ? "" : R1.targetCoefficient.toString();
        const R2TargetCoefficient = R2.targetCoefficient === 1 ? "" : R2.targetCoefficient.toString();
        const P1TargetCoefficient = P1.targetCoefficient === 1 ? "" : P1.targetCoefficient.toString();
        const P2TargetCoefficient = P2.targetCoefficient === 1 ? "" : P2.targetCoefficient.toString();

        if (coefficientInputs.R1 === R1TargetCoefficient 
            && coefficientInputs.R2 === R2TargetCoefficient
            && coefficientInputs.P1 === P1TargetCoefficient 
            && coefficientInputs.P2 === P2TargetCoefficient) 
        {
            setInputColor({backgroundColor: "palegreen"});
        } else {
            setInputColor({backgroundColor: "lightpink"});
        }
    }, []) 

    return [coefficientInputs, handleCoefficientInputs, inputColor, handleUpdateInputColor];
};
