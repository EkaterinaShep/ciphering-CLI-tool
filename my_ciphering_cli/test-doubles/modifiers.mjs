import { Caesar, ROT8, Atbash } from '../src/streams/filemodifiers.mjs';
import { mockFuncModifier } from './mock-funt-modifier.mjs';

const modifiers = [
  [new Caesar(mockFuncModifier)],
  [new ROT8(mockFuncModifier)],
  [new Atbash(mockFuncModifier)],
];

export { modifiers };
