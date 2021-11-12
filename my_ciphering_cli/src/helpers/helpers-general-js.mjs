/* --------------------------------- Helpers -------------------------------- */
// flatArr
function flatArr(arr, depth) {
  return arr.flat(depth);
}

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

/* --------------------------------- Exports -------------------------------- */
export {
  flatArr,
  getIndex,
  getStringFromArray,
  getArrFromStr,
  isUpperCased,
  pipe,
};
