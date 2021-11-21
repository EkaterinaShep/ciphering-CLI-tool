import { PassThrough } from 'stream';
import { Caesar, ROT8, Atbash } from '../../../src/streams/filemodifiers.mjs';

const mockFn = jest.fn(() => {
  return 'Hello, world!';
});

const modifiers = [
  [new Caesar(mockFn)],
  [new ROT8(mockFn)],
  [new Atbash(mockFn)],
];

test.each(modifiers)('should transform data', (modifier) => {
  const mockReader = new PassThrough();

  mockReader.pipe(modifier);

  mockReader.emit('data', 'text');

  let result = '';

  modifier.on('data', (data) => {
    result += data.toString();
    expect(result).toBe('Hello, world!');
  });
});
