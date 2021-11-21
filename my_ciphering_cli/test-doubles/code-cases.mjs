const codeCases = [
  [
    {
      text: 'abc',
      cipherName: 'caesar',
      cipherDirection: 1,
    },
    'bcd',
  ],
  [
    {
      text: 'abc',
      cipherName: 'caesar',
      cipherDirection: 0,
    },
    'zab',
  ],
  [
    {
      text: 'abc',
      cipherName: 'atbash',
    },
    'zyx',
  ],
  [
    {
      text: 'abc',
      cipherName: 'rot8',
      cipherDirection: 1,
    },
    'ijk',
  ],
  [
    {
      text: 'abc',
      cipherName: 'rot8',
      cipherDirection: 0,
    },
    'stu',
  ],
  [
    {
      text: 'ABC',
      cipherName: 'rot8',
      cipherDirection: 0,
    },
    'STU',
  ],
  [
    {
      text: '!_?',
      cipherName: 'rot8',
      cipherDirection: 0,
    },
    '!_?',
  ],
  [
    {
      text: 'абвАБВ',
      cipherName: 'rot8',
      cipherDirection: 0,
    },
    'абвАБВ',
  ],
];

export { codeCases };
