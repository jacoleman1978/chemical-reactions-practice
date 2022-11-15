/**
 * 
 * @param list An array of any type
 * @returns The value at a random index as any type
 */
export const getRandomListMember = (list: any[]): any => {
    const length: number = list.length;
    const randomIndex: number = Math.floor(length * Math.random());

    return list[randomIndex]
};
