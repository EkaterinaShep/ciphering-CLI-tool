import {
  getOptionValue,
  getArgs,
} from './src/working-with-command-line/nodejs-cl-general.mjs';
import { constants } from 'fs';
import { FileReader } from './src/streams/filereader.mjs';
import { FileWriter } from './src/streams/filewriter.mjs';

import { pipeline } from 'stream';
import { checkAccessToFiles } from './src/validation/check-access-to-files.mjs';
import { validateConfig } from './src/validation/validate-config.mjs';
import { validateArgs } from './src/validation/validate-args/index.js';
import { getModifiersArr } from './src/ciphers/get-modifiers-arr.mjs';
import { InternalError } from './src/errors/custom-errors.mjs';
import { handleError } from './src/errors/handle-error.mjs';

/* -------------------- Command line arguments retrieving -------------------- */
const args = getArgs();

/* -------------------------- Arguments validation -------------------------- */
validateArgs({
  args,
  options: [
    ['-c', '--config'],
    ['-i', '--input'],
    ['-o', '--output'],
  ],
});

/* --------------------------- Options Values retrieving -------------------------- */
const config = getOptionValue(args, '-c') || getOptionValue(args, '--config');
const inputFile = getOptionValue(args, '-i') || getOptionValue(args, '--input');
const outputFile =
  getOptionValue(args, '-o') || getOptionValue(args, '--output');

/* ------------------------- Options Values validation ------------------------ */
validateConfig(config, ['C1', 'C0', 'R1', 'R0', 'A']);

checkAccessToFiles(
  { inputFile, outputFile },
  {
    inputFile: constants.F_OK | constants.R_OK,
    outputFile: constants.F_OK | constants.R_OK | constants.W_OK,
  }
);

/* ----------------------------- Streams creation ---------------------------- */
const reader = inputFile ? new FileReader(inputFile) : process.stdin;
const modifiers = getModifiersArr(config);
const writer = outputFile ? new FileWriter(outputFile) : process.stdout;

/* ---------------------------- Pipeline creation --------------------------- */
try {
  pipeline(reader, ...modifiers, writer, (err) => {
    if (err) {
      throw new InternalError(
        'sorry, an internal error has occurred. Please, connect katshep.pr@gmail.com'
      );
    }
  });
} catch (err) {
  handleError(err);
}
