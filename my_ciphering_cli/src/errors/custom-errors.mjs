/* ------------------------------- Main Error ------------------------------- */
// CustomError
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

/* --------------------------------- Errors --------------------------------- */
// FileAccessError
class FileAccessError extends CustomError {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 1;
  }
}

// MissingArgumentError
class MissingArgumentError extends CustomError {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 2;
  }
}

// InvalidConfigError
class InvalidConfigError extends CustomError {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 3;
  }
}

// DuplicateFlagError
class DuplicateOptionError extends CustomError {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 4;
  }
}

// MissingOptionValueError
class MissingOptionValueError extends CustomError {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 5;
  }
}

// StreamError
class InternalError extends CustomError {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 6;
  }
}

/* --------------------------------- Exports -------------------------------- */
export {
  CustomError,
  InternalError,
  MissingOptionValueError,
  DuplicateOptionError,
  InvalidConfigError,
  MissingArgumentError,
  FileAccessError,
};
