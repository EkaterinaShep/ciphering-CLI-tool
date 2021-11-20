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

const args = ['node'].concat(options.valid);

test('should return process arguments', () => {
  process.argv = args;

  expect(getArgs()).toEqual(process.argv);
});

describe('Option value retrieving', () => {
  test('should return option value', () => {
    const option = '-c';
    const optionValue = 'C1-C1-R0-A';

    expect(getOptionValue(args, option)).toBe(optionValue);
  });

  test('should return null on option absence', () => {
    const option = '-j';

    expect(getOptionValue(args, option)).toBe(null);
  });

  test('should call getIndex with args and option', () => {
    const option = '-c';

    getOptionValue(args, option);

    expect(getIndex).toHaveBeenCalledWith(args, option);
  });
});
