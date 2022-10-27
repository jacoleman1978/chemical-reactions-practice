const getPracticeDefaultTitle = (path: string): string => {
    if (path === "naming") {
        return "Naming Compounds"
    } else if (path === "formulas") {
        return "Formulas of Compounds"
    } else if (path === "balancing") {
        return "Balancing Equations"
    } else if (path === "reaction-types") {
        return "Reaction Types"
    } else if (path === "predictingproducts") {
        return "Predicting Products"
    } 
    
    return "Practice Types"
} 

export default getPracticeDefaultTitle;