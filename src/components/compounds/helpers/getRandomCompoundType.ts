import { getRandomListMember } from '../../common/helpers/getRandomListMember';
import { CompoundType } from '../../common/configurations/types';

export const getRandomCompoundType = (compoundType: CompoundType): CompoundType => {
    // If "compoundType" contains the string "mixed", randomly choose and assign an appropriate "compoundType"
    if (compoundType === "ionic-mixed") {
        return getRandomListMember(["ionic-transition", "ionic-polyatomic"]);

    } else if (compoundType === "mixed") {
        return getRandomListMember(["ionic-transition", "ionic-polyatomic", "acids"]);
    }

    return "ionic-main"
};
