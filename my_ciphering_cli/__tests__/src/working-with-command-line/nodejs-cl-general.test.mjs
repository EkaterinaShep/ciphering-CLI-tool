import {
  getOptionValue,
  getArgs,
} from '../../../src/working-with-command-line/nodejs-cl-general.mjs';
import { options } from '../../../test-doubles/options.mjs';
import { getIndex } from '../../../src/helpers/helpers-general-js.mjs';

jest.mock('../../../src/helpers/helpers-general-js.mjs', () => {
  const originalModule = jest.requireActual(
    '../../../src/helpers/helpers-general-js.mjs'
  );

  return {
    __esModule: true,
    ...originalModule,
    getIndex: jest.fn((arr, element) => {
      return arr.indexOf(element);
    }),
  };
});

const ARGS = ['node'].concat(options.valid);
const EXISTING_OPTION = '-c';
const EXISTING_OPTION_VALUE = 'C1-C1-R0-A';
const ABSENT_OPTION = '-j';
const ABSENT_OPTION_VALUE = null;

test('should return process arguments', () => {
  process.argv = ARGS;

  expect(getArgs()).toEqual(process.argv);
});

describe('Option value retrieving', () => {
  test('should return option value', () => {
    expect(getOptionValue(ARGS, EXISTING_OPTION)).toBe(EXISTING_OPTION_VALUE);
  });

  test('should return null on option absence', () => {
    expect(getOptionValue(ARGS, ABSENT_OPTION)).toBe(ABSENT_OPTION_VALUE);
  });

  test('should call getIndex with args and option', () => {
    getOptionValue(ARGS, EXISTING_OPTION);

    expect(getIndex).toHaveBeenCalledWith(ARGS, EXISTING_OPTION);
  });
});
