import { CustomError } from './custom-errors.mjs';
import { exit } from 'process';

function handleError(err) {
  if (err instanceof CustomError) {
    console.error(`${err.name}: ${err.message}`);
    exit(err.statusCode);
  } else {
    throw err;
  }
}

export { handleError };
