import process from 'process';
import { getIndex } from '../helpers/helpers-general-js.mjs';

/* --------------------------------- Functions -------------------------------- */
// getArgs
function getArgs() {
  return process.argv;
}

// getArg
function getOptionValue(userArgs, option) {
  const optionIndex = getIndex(userArgs, `${option}`);

  return optionIndex === -1 || optionIndex === userArgs.length - 1
    ? null
    : userArgs[optionIndex + 1].trim();
}

/* --------------------------------- Exports -------------------------------- */
export { getOptionValue, getArgs };
