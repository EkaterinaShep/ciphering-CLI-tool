import { DuplicateOptionError } from '../../errors/custom-errors.mjs';
import { handleError } from '../../errors/handle-error.mjs';

function checkOptionsDuplications(userArgs, options) {
  try {
    options.forEach((option) => {
      const optionCount = getOptionCount(userArgs, option);

      if (optionCount > 1) {
        throw new DuplicateOptionError(
          `the option "${option[1].slice(2)}" is defined ${optionCount} times`
        );
      }
    });
  } catch (err) {
    handleError(err);
  }
}

function getOptionCount(userArgs, option) {
  return option.reduce((count, optionVariation) => {
    return userArgs.filter((arg) => arg === optionVariation).length + count;
  }, 0);
}

export { checkOptionsDuplications };
