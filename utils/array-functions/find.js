export const find = (array = [], fn) => {
  if (!Array.isArray(array)) {
    throw new TypeError('array parameter must be a array');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('fn parameter must be a function');
  }
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i, array)) return array[i];
  }
  return undefined;
};
