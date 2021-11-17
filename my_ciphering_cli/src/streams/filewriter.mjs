import { Writable } from 'stream';
import fs from 'fs';

class FileWriter extends Writable {
  constructor(filePath) {
    super();
    this.filePath = filePath;
  }

  _construct(callback) {
    fs.open(this.filePath, 'a', (err, fd) => {
      if (err) {
        callback(err);
        return;
      }

      this.fd = fd;

      callback();
    });
  }

  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk, callback);
  }

  _destroy(err, callback) {
    if (this.fd) {
      fs.write(this.fd, '\n', callback);
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

export { FileWriter };
