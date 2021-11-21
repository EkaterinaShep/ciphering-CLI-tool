import { PassThrough } from 'stream';
import { modifiers } from '../../../test-doubles/modifiers.mjs';

test.each(modifiers)('should transform data', (modifier) => {
  const mockReader = new PassThrough();

  mockReader.pipe(modifier);

  mockReader.emit('data', 'text');

  let result = '';

  modifier.on('data', (data) => {
    result += data.toString();

    modifier.destroy();
  });

  modifier.on('close', () => {
    expect(result).toBe('Hello, world!');
  });
});
