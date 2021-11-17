import { accessSync } from 'fs';
import { FileAccessError } from '../errors/custom-errors.mjs';
import { handleError } from '../errors/handle-error.mjs';

function checkAccessToFiles(files, mode) {
  try {
    Object.entries(files).forEach((entry) => {
      const filePath = entry[1];
      const fileName = entry[0];

      if (!filePath) {
        return;
      }

      checkFileAccessSync(filePath, mode[fileName]);
    });
  } catch (err) {
    handleError(err);
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
