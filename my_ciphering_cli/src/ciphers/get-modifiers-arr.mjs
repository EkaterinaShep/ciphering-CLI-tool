import { Caesar, ROT8, Atbash } from '../streams/filemodifiers.mjs';
import { code } from '../ciphers/code.mjs';
import { getArrFromStr } from '../helpers/helpers-general-js.mjs';

function getModifiersArr(config) {
  const ciphersOptions = getCipherOptions(config);

  return ciphersOptions.map((item) => {
    switch (item.cipherInitial) {
      case 'C':
        return new Caesar(code, item.cipherDirection);
      case 'R':
        return new ROT8(code, item.cipherDirection);
      case 'A':
        return new Atbash(code);
    }
  });
}

function getCipherOptions(config) {
  return getArrFromStr(config, '-').map((value) => {
    return { cipherInitial: value[0], cipherDirection: Number(value[1]) };
  });
}

export { getModifiersArr };
