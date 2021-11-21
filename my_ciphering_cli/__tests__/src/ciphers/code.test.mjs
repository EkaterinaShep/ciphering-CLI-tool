import { code } from '../../../src/ciphers/code.mjs';
import { codeCases } from '../../../test-doubles/code-cases.mjs';

test.each(codeCases)('should code in the correct way', (input, expected) => {
  expect(code(input)).toBe(expected);
});
