import { useState } from "react";
import { UseToggle } from "../types";

/**
 * 
 * @returns displayToggle as a boolean and handleToggle as a void function to change displayToggle
 */
export const useToggle = (): UseToggle => {
    const [displayToggle, setDisplayToggle] = useState<boolean>(false);

    const handleToggle = (): void => {
        setDisplayToggle(displayToggle => !displayToggle);
    }

    return [displayToggle, handleToggle]
}