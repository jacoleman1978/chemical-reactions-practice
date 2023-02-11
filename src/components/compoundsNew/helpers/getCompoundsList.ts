import axios from "axios";
import { CompoundType } from "../../common/configurations/types";

export const getCompoundsList = (compoundType: CompoundType, numberInList: number) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:3333/compounds/${compoundType}/${numberInList}`);
};
