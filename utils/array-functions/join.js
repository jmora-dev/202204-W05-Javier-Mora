export const join = (array = [], separator = ',') => {
  if (!Array.isArray(array)) {
    throw new TypeError('array parameter must be a array');
  }
  let result = '';
  for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i !== array.length - 1) {
      result += separator;
    }
  }
  return result;
};
