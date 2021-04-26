// ES-0002

const getHighestNumber = (numberArray: number[]) => [...numberArray].sort((a, b) => a - b)[numberArray.length - 1];

export const problem1 = (numberArray: number[]): number[] => {
    const highestNumber = getHighestNumber(numberArray);

    return [...Array(highestNumber).keys()].map((_value, index) => index + 1)
}