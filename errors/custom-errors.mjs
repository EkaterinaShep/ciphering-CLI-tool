class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class FileAccessError extends CustomError {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 1;
  }
}

export { FileAccessError };
