import { useState } from "react";
import { UseFlag } from "./configurations/types";

/**
 * 
 * @returns flag as a boolean and handleSetFlag as a void function to change flag to the desired boolean value
 */
export const useFlag = (): UseFlag => {
    const [flag, setFlag] = useState<boolean>(false);

    const handleSetFlag = (newFlag: boolean): void => {
        setFlag(newFlag);
    }

    return [flag, handleSetFlag]
}