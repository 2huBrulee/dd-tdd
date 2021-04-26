import { problem1 } from "../src/problem1";

const numberOfGeneratedTests: number = 10;

describe("Problem1", () => {
  [...Array(numberOfGeneratedTests).keys()].forEach((_value, index) => {

    const testArrayLength = Math.floor(Math.random() * numberOfGeneratedTests) + 1;

    const testArray = [...Array(testArrayLength).keys()].map(()=> Math.floor(Math.random() * 100))

    const highestNumber = [...testArray].sort((a, b) => a - b)[testArrayLength - 1];

    it("should return an array with number of elements matching the highest number (" + highestNumber + ") from " + testArray, () => {
      const result = problem1(testArray);

      expect(result.length).toEqual(highestNumber);
    });

    it("should return an array starting in '1' if the array has at least one number", () => {
        const result = problem1(testArray);

        expect(result[0]).toEqual(1);
    })

    it("should return an array with each element being the value of the previous element plus '1'", () => {
        const result = problem1(testArray);

        result.forEach((currentNumber, currentIndex, numberArray) => {
            if(currentIndex === 0) return false;
            
            expect(currentNumber - 1).toEqual(numberArray[currentIndex - 1]);
        });
    })
  });
});
