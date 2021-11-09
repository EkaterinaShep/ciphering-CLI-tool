/* --------------------------------- Helpers -------------------------------- */
// getIndex
function getIndex(arr, element) {
  return arr.indexOf(element);
}

// getStringFromArray
function getStringFromArray(arr) {
  return arr.join('');
}

// getArrayFromData
function getArrFromStr(str, separator = '') {
  return str.split(separator);
}

// isUpperCased
function isUpperCased(char) {
  return char === char.toUpperCase();
}

// Pipe
function pipe(...fns) {
  return function piped(result) {
    var list = [...fns];

    while (list.length > 0) {
      result = list.shift()(result);
    }

    return result;
  };
}

// curry
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

/* --------------------------------- Exports -------------------------------- */
export { getIndex, curry, getStringFromArray, getArrFromStr, isUpperCased, pipe };
