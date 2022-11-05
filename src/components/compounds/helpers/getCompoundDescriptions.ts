import { CompoundDescription } from "../../../interfaces";

export const getCompoundDescriptions = (type: string, namingData: CompoundDescription): string => {
    if (type === 'ionic-main') {
        return namingData.ionic.main
    } else if (type === 'ionic-transition') {
        return namingData.ionic.transition
    } else if (type === 'ionic-polyatomic') {
        return namingData.ionic.polyatomic
    } else if (type === 'ionic-mixed') {
        return namingData.ionic.mixed
    } else if (type === 'acids') {
        return namingData.acids
    } else if (type === 'molecular') {
        return namingData.molecular
    } else if (type === 'mixed') {
        return namingData.mixed
    } 

    return ""
}