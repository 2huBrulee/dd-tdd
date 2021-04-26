import { problem2 } from "../src/problem2";

describe("Problem2", () => {
  it("should return a string of same size as input", () => {
    const inputString = "222";
    const result = problem2(inputString);

    expect(inputString.length).toBe(result.length);
  });

  const edgeTests = [
    {
      original: "ñ",
      replacedWith: "o",
    },
    {
      original: "n",
      replacedWith: "ñ",
    },
    {
      original: "Z",
      replacedWith: "A",
    },
  ];

  edgeTests.forEach((edgeTest) => {
    const { original, replacedWith } = edgeTest;
    it("should replace a " + original + " with " + replacedWith, () => {
      const result = problem2(original);

      expect(result).toBe(replacedWith);
    });
  });
});
