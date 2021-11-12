import { MissingOptionValueError } from '../../errors/custom-errors.mjs';
import { handleError } from '../../errors/handle-error.mjs';
import { flatArr } from '../../helpers/helpers-general-js.mjs';
import { getIndex } from '../../helpers/helpers-general-js.mjs';

function checkOptionsValuesExistence(userArgs, options) {
  const flattenOptions = flatArr(options, 1);

  flattenOptions.forEach((option) => {
    const optionIndex = getIndex(userArgs, `${option}`);

    if (optionIndex) {
      try {
        const argAfterOption = userArgs[optionIndex + 1];

        if (!argAfterOption || isOption(flattenOptions, argAfterOption)) {
          throw new MissingOptionValueError(
            `missing value for "${option}" option`
          );
        }
      } catch (err) {
        handleError(err);
      }
    }
  });
}

function isOption(options, arg) {
  return options.includes(arg);
}

export { checkOptionsValuesExistence };
