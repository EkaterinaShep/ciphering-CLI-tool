import { spawn } from 'child_process';
import { errors } from '../../test-doubles/errors.mjs';
import { options } from '../../test-doubles/options.mjs';

describe('Interactions with a user: error scenarios', () => {
  test('should return error with correct message on duplicated argument', () => {
    const childProcess = spawn('node', options.withDuplication);

    let errorMessage = '';

    childProcess.stderr.on('data', (data) => {
      errorMessage += data.toString();
    });

    childProcess.on('close', () => {
      errorMessage = errorMessage.trim();

      expect(errorMessage).toBe(errors.duplicateOptionError);
    });
  });

  test('should return error with correct message on config miss', () => {
    const childProcess = spawn('node', options.withoutConfig);

    let errorMessage = '';

    childProcess.stderr.on('data', (data) => {
      errorMessage += data.toString();
    });

    childProcess.on('close', () => {
      errorMessage = errorMessage.trim();

      expect(errorMessage).toBe(errors.missingArgumentError);
    });
  });

  test('should return error with correct message on inaccessible input file', () => {
    const childProcess = spawn('node', options.withInaccessibleInputFile);

    let errorMessage = '';

    childProcess.stderr.on('data', (data) => {
      errorMessage += data.toString();
    });

    childProcess.on('close', () => {
      errorMessage = errorMessage.trim();

      expect(errorMessage).toBe(errors.inputFileAccessError);
    });
  });

  test('should return error with correct message on inaccessible output file', () => {
    const childProcess = spawn('node', options.withInaccessibleOutputFile);

    let errorMessage = '';

    childProcess.stderr.on('data', (data) => {
      errorMessage += data.toString();
    });

    childProcess.on('close', () => {
      errorMessage = errorMessage.trim();

      expect(errorMessage).toBe(errors.outputFileAccessError);
    });
  });

  test('should return error with correct message on invalid config', () => {
    const childProcess = spawn('node', options.withInvalidConfig);

    let errorMessage = '';

    childProcess.stderr.on('data', (data) => {
      errorMessage += data.toString();
    });

    childProcess.on('close', () => {
      errorMessage = errorMessage.trim();

      expect(errorMessage).toBe(errors.invalidConfigError);
    });
  });
});

describe('Interactions with a user: success  scenarios', () => {
  const cases = [
    [['--config', 'C1-C1-R0-A'], 'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!'],
    [['-c', 'C1-C1-R0-A'], 'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!'],
    [
      ['-c', 'C1-C0-A-R1-R0-A-R0-R0-C1-A'],
      'Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!',
    ],
    [
      ['-c', 'A-A-A-R1-R0-R0-R0-C1-C1-A'],
      'Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!',
    ],
    [
      ['-c', 'C1-R1-C0-C0-A-R0-R1-R1-A-C1'],
      'This is secret. Message about "_" symbol!',
    ],
  ];

  test.each(cases)(
    'should encoding and decoding in the correct way',
    (config, result) => {
      const childProcess = spawn(
        'node',
        [].concat(options.validButWithoutConfig, config)
      );

      let cpResult = '';

      childProcess.stdout.on('data', (data) => {
        cpResult += data.toString();
      });

      childProcess.on('close', () => {
        expect(cpResult.trim()).toBe(result);
      });
    }
  );
});
