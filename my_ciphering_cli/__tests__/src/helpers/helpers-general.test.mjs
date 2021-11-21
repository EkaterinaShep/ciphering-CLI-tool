import {
  flatArr,
  getIndex,
  getStringFromArray,
  getArrFromStr,
  isUpperCased,
  pipe,
} from '../../../src/helpers/helpers-general-js.mjs';

const ARR = [
  [[1], 2],
  [3, 4],
];
const ARR_DEPTH = 2;
const FLATTEN_ARR = [1, 2, 3, 4];
const RANDOM_ELEMENT_FROM_ARRAY = 2;
const RANDOM_ELEMENT_POSITION = 1;
const STRING = '1234';
const STRING_SPLIT = ['1', '2', '3', '4'];

test('should return flatten array', () => {
  expect(flatArr(ARR, ARR_DEPTH)).toEqual(FLATTEN_ARR);
});

test('should return index', () => {
  expect(getIndex(FLATTEN_ARR, RANDOM_ELEMENT_FROM_ARRAY)).toBe(
    RANDOM_ELEMENT_POSITION
  );
});

test('should return string from array', () => {
  expect(getStringFromArray(FLATTEN_ARR)).toBe(STRING);
});

test('should return array from string', () => {
  expect(getArrFromStr(STRING)).toEqual(STRING_SPLIT);
});
