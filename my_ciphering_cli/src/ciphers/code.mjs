import {
  getStringFromArray,
  getArrFromStr,
  isUpperCased,
  pipe,
} from '../helpers/helpers-general-js.mjs';

/* -------------------------------- Constants ------------------------------- */
const CODE_A = 'A'.charCodeAt(0);
const CODE_a = 'a'.charCodeAt(0);
const ABC_COUNT = 26;

/* ------------------------------ Main function ----------------------------- */
function code({ text, cipherName, cipherDirection = 1 }) {
  const codeEachChar = setCodeOptions({ cipherName, cipherDirection });
  const codeText = pipe(getArrFromStr, codeEachChar, getStringFromArray);

  const codedText = codeText(text);

  return codedText;
}

/* -------------------------- Additional functions ------------------------- */
function setCodeOptions({ cipherName, cipherDirection }) {
  const shift = getShift(cipherName, cipherDirection);

  return (arr) => {
    return arr.map((item) => {
      const itemIndexInAbc = getIndexInAbc(item);

      const codedItem =
        itemIndexInAbc < 0 || itemIndexInAbc >= ABC_COUNT
          ? item
          : shift === 0
          ? atbash(itemIndexInAbc)
          : String.fromCharCode(
              CODE_a + ((itemIndexInAbc + shift) % ABC_COUNT)
            );

      return isUpperCased(item) ? codedItem.toUpperCase() : codedItem;
    });
  };
}

function atbash(itemIndexInAbc) {
  return String.fromCharCode(
    CODE_a + ((ABC_COUNT - 1 - itemIndexInAbc) % ABC_COUNT)
  );
}

function getShift(cipherName, cipherDirection) {
  const shift = cipherName === 'caesar' ? 1 : cipherName === 'rot8' ? 8 : 0;
  return cipherDirection === 1 ? shift : -shift + ABC_COUNT;
}

function getIndexInAbc(char) {
  return isUpperCased(char)
    ? char.charCodeAt(0) - CODE_A
    : char.charCodeAt(0) - CODE_a;
}

/* --------------------------------- Exports --------------------------------- */
export { code };
