import { Readable } from 'stream';
import fs from 'fs';
import { Buffer } from 'buffer';

class FileReader extends Readable {
  constructor(filePath) {
    super();
    this.filePath = filePath;
    this.fd = null;

  }

  _construct(callback) {
    fs.open(this.filePath, 'r', (err, fd) => {
      if (err) {
        callback(err);
        return;
      }

      this.fd = fd;

      callback();
    });
  }

  _read(size) {
    const buf = Buffer.alloc(size);

    fs.read(this.fd, buf, 0, size, null, (err, bytesRead) => {
      if (err) {
        this.destroy(err);
        return;
      }

      this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null);
    });
  }

  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

export { FileReader };
