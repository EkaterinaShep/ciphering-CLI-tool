const options = {
  withDuplication: ['./my_ciphering_cli', '-c', 'C1-C1-R0-A', '-c', 'C1'],
  withoutConfig: ['./my_ciphering_cli'],
  withInaccessibleInputFile: [
    './my_ciphering_cli',
    '-c',
    'C1-C1-R0-A',
    '-i',
    './error.txt',
  ],
  withInaccessibleOutputFile: [
    './my_ciphering_cli',
    '-c',
    'C1-C1-R0-A',
    '-o',
    './error.txt',
  ],
  withInvalidConfig: ['./my_ciphering_cli', '-c', 'C1-C1-R0-A5'],
  valid: [
    './my_ciphering_cli',
    '-c',
    'C1-C1-R0-A',
    '-i',
    './input.txt',
    '-o',
    './output.txt',
  ],
  validButWithoutConfig: ['./my_ciphering_cli', '-i', './input.txt'],
};

export { options };
