import { accessSync } from 'fs';
import { exit } from 'process';
import { FileAccessError } from '../errors/custom-errors.mjs';

function checkAccessToFiles(files, mode) {
  try {
    Object.entries(files).forEach((entry) => {
      const filePath = entry[1];
      const fileName = entry[0];
      checkFileAccessSync(filePath, mode[fileName]);
    });
  } catch (err) {
    console.error(`${err.name}: ${err.message}`);
    exit(err.statusCode);
  }
}

function checkFileAccessSync(filePath, mode) {
  try {
    accessSync(`${filePath}`, mode);
  } catch (err) {
    throw new FileAccessError(`file "${filePath}" is not accessible`);
  }
}

export { checkAccessToFiles };
