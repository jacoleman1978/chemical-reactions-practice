const getPracticeDefaultTitle = (path: string[]): string => {
    if (path[0] === "compounds") {
        if (path[1] === "naming") {
            return "Naming Compounds"
        } else if (path[1] === "formulas") {
            return "Formulas of Compounds"
        }
    } else if (path[0] === "balancing") {
        return "Balancing Equations"
    } else if (path[0] === "reactiontypes") {
        return "Reaction Types"
    } else if (path[0] === "predictingproducts") {
        return "Predicting Products"
    } 
    
    return "Practice Types"
} 

export default getPracticeDefaultTitle;