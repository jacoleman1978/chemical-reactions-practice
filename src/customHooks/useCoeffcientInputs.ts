import { useState, useCallback } from 'react';
import { UseCoefficientInputs, CoefficientType } from './configurations/types';
import { CoefficientInputs, BackgroundColorStyle } from './configurations/interfaces';
import { EquationParts } from '../components/reaction-types/configurations/interfaces';

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
    const handleUpdateInputColor = useCallback((coefficientInputs: CoefficientInputs, equationParts: EquationParts): void => {
        if (coefficientInputs.R1 === equationParts.R1.targetCoefficient 
            && coefficientInputs.R2 === equationParts.R2.targetCoefficient
            && coefficientInputs.P1 === equationParts.P1.targetCoefficient 
            && coefficientInputs.P2 === equationParts.P2.targetCoefficient) 
        {
            setInputColor({backgroundColor: "palegreen"});
        } else {
            setInputColor({backgroundColor: "lightpink"});
        }
    }, []) 

    return [coefficientInputs, handleCoefficientInputs, inputColor, handleUpdateInputColor];
};
