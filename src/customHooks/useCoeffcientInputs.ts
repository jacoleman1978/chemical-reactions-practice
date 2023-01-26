import { useState, useCallback } from 'react';
import { UseCoefficientInputs, CoefficientType } from './configurations/types';
import { CoefficientInputs, BackgroundColorStyle } from './configurations/interfaces';
import { EquationParts } from '../components/balancing-equations/configurations/interfaces';

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
