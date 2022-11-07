import { useState } from "react";
import { UseToggle } from "../types";

/**
 * 
 * @returns toggleFlag as a boolean and handleToggle as a void function to change toggleFlag
 */
export const useToggle = (): UseToggle => {
    const [toggleFlag, setToggleFlag] = useState<boolean>(false);

    const handleToggle = (): void => {
        setToggleFlag(toggleFlag => !toggleFlag);
    }

    return [toggleFlag, handleToggle]
}