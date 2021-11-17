import {
  InvalidConfigError,
  MissingArgumentError,
} from '../errors/custom-errors.mjs';
import { handleError } from '../errors/handle-error.mjs';
import { getArrFromStr } from '../helpers/helpers-general-js.mjs';

function validateConfig(config, correctValues) {
  try {
    isConfigValid(config, correctValues);
  } catch (err) {
    handleError(err);
  }
}

function isConfigValid(config, correctValues) {
  if (!config) {
    throw new MissingArgumentError('missing config argument');
  }

  if (isThereInvalidValues(config, correctValues)) {
    throw new InvalidConfigError('configuration is invalid');
  }
}

function isThereInvalidValues(config, correctValues) {
  return (
    getArrFromStr(config, '-').filter((item) => !correctValues.includes(item))
      .length > 0
  );
}

export { validateConfig };
