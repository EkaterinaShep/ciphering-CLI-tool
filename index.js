import { getArg, getArgs } from './working-with-cmd/nodejs-cmd-general.mjs';
import { constants } from 'fs';
import { FileReader } from './streams/filereader.mjs';
import { FileWriter } from './streams/filewriter.mjs';
import { Caesar, ROT8, Atbash } from './streams/filemodifiers.mjs';
import { code } from './ciphers/chiphering.mjs';
import { getArrFromStr } from './helpers/helpers-general-js.mjs';
import { pipeline } from 'stream';

const args = getArgs();
const config = getArg(args, '-c') || getArg(args, '--config');
const inputFile = getArg(args, '-i') || getArg(args, '--input');
const outputFile = getArg(args, '-o') || getArg(args, '--output');

const reader = new FileReader(inputFile);
const modifiers = getModifiersArr();
const writer = new FileWriter(outputFile);

pipeline(reader, ...modifiers, writer, (err) => {
  if (err) {
    //   console.error('Pipeline failed.', err);
  } else {
    //console.log('Pipeline succeeded.');
  }
});

/* --------------------------------- Helpers -------------------------------- */
function getModifiersArr() {
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
  const ciphersOptions = getArrFromStr(config, '-').map((value) => {
    return { cipherInitial: value[0], cipherDirection: +value[1] };
  });

  return ciphersOptions;
}
