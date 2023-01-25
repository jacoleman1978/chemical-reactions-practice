import { useState, useCallback } from 'react';
import { UseCoefficientInputs, CoefficientType } from './configurations/types';
import { CoefficientInputs, BackgroundColorStyle } from './configurations/interfaces';

export const useCoefficientInputs = (): UseCoefficientInputs => {
    const [coefficientInputs, setCoefficientInputs] = useState<CoefficientInputs>({
        R1: "",
        R2: "",
        P1: "",
        P2: "",
    });
    const [inputColor, setInputColor] = useState<BackgroundColorStyle>({backgroundColor: "lightgray"});

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

        setInputColor({backgroundColor: "lightgray"});
    }, []) 

    const handleUpdateInputColor = useCallback((coefficientInputs: CoefficientInputs, targetCoefficients: CoefficientInputs): void => {
        if (coefficientInputs.R1 === targetCoefficients.R1 
            && coefficientInputs.R2 === targetCoefficients.R2 
            && coefficientInputs.P1 === targetCoefficients.P1 
            && coefficientInputs.P2 === targetCoefficients.P2) 
        {
            setInputColor({backgroundColor: "palegreen"});
        } else {
            setInputColor({backgroundColor: "lightpink"});
        }
    }, []) 

    return [coefficientInputs, handleCoefficientInputs, inputColor, handleUpdateInputColor];
};
