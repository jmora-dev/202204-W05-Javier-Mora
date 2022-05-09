export const reduce = (array = [], fn, initialValue) => {
  if (!Array.isArray(array)) {
    throw new TypeError('array parameter must be a array');
  }
  if (array.length === 0) {
    throw new TypeError('Reduce of empty array with no initial value');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('fn parameter must be a function');
  }
  let result = initialValue === undefined ? array[0] : initialValue;
  for (let i = initialValue === undefined ? 1 : 0; i < array.length; i++) {
    result = fn(result, array[i], i, array);
  }
  return result;
};
