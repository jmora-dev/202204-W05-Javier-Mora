export const map = (array = [], fn) => {
  if (!Array.isArray(array)) {
    throw new TypeError('array parameter must be a array');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('fn parameter must be a function');
  }
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results[results.length] = fn(array[i], i, array);
  }
  return results;
};
