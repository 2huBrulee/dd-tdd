// ES-0001

import { alphabet } from "./constants";

const isInAlphabet = (alphabet: string[]) => (character: string) => {
  return alphabet.indexOf(character.toLowerCase()) !== -1;
};

const ifIsEnye = (characterCode: number) =>
  characterCode === 241 || characterCode === 209;

const ifIsZ = (characterCode: number) =>
  characterCode === 122 || characterCode === 90;

const ifIsN = (characterCode: number) =>
  characterCode === 110 || characterCode === 78;

const getCodeOfNextLetter = (characterCode: number) => {
  if (ifIsEnye(characterCode)) return characterCode - 130;
  if (ifIsZ(characterCode)) return characterCode - 25;
  if (ifIsN(characterCode)) return characterCode + 131;

  return characterCode + 1;
};
const transformCharacter = (character: string) => {
  if (!isInAlphabet(alphabet)(character)) return character;

  const code = character.charCodeAt(0);

  const nextLetterCode = getCodeOfNextLetter(code);

  const newCharacter = String.fromCharCode(nextLetterCode);

  return newCharacter;
};

export const problem2 = (inputString: string): string => {
  return inputString.split("").map(transformCharacter).join("");
};
