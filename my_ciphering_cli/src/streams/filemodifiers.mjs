import { Transform } from 'stream';

class Caesar extends Transform {
  constructor(funcModifier, cipherDirection = 1) {
    super();
    this.cipherDirection = cipherDirection;
    this.funcModifier = funcModifier;
  }

  _transform(chunk, encoding, callback) {
    const data = this.funcModifier({
      text: chunk.toString(),
      cipherName: 'caesar',
      cipherDirection: this.cipherDirection,
    });
    this.push(data);
    callback();
  }
}

class ROT8 extends Transform {
  constructor(funcModifier, cipherDirection = 1) {
    super();
    this.cipherDirection = cipherDirection;
    this.funcModifier = funcModifier;
  }

  _transform(chunk, encoding, callback) {
    const data = this.funcModifier({
      text: chunk.toString(),
      cipherName: 'rot8',
      cipherDirection: this.cipherDirection,
    });

    this.push(data);
    callback();
  }
}

class Atbash extends Transform {
  constructor(funcModifier) {
    super();
    this.funcModifier = funcModifier;
  }

  _transform(chunk, encoding, callback) {
    const data = this.funcModifier({ text: chunk.toString() });
    this.push(data);
    callback();
  }
}

export { Caesar, ROT8, Atbash };
