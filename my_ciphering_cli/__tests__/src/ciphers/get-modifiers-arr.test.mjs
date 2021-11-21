import { getModifiersArr } from '../../../src/ciphers/get-modifiers-arr.mjs';
import { Caesar, ROT8, Atbash } from '../../../src/streams/filemodifiers.mjs';
jest.mock('../../../src/streams/filemodifiers.mjs');

test('should call to the filemodifiers constructors correct number of times', () => {
  const config = 'C1-C0-A-R1-R0-A-R0-R0-C1-A';

  getModifiersArr(config);
  expect(Caesar).toHaveBeenCalledTimes(3);
  expect(ROT8).toHaveBeenCalledTimes(4);
  expect(Atbash).toHaveBeenCalledTimes(3);
});
