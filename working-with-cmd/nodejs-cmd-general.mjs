import process from 'process';
import { getIndex } from '../helpers/helpers-general-js.mjs';

/* --------------------------------- Functions -------------------------------- */
// getArgs
function getArgs() {
  return process.argv;
}

// getArg
function getArg(args, flag) {
  const flagIndex = getIndex(args, `${flag}`);

  return flagIndex === -1 ? null : args[flagIndex + 1];
}

/* --------------------------------- Exports -------------------------------- */
export { getArg, getArgs };
