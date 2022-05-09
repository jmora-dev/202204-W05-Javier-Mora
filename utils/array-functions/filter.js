export const filter = (array = [], fn) => {
  if (!Array.isArray(array)) {
    throw new TypeError('array parameter must be a array');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('fn parameter must be a function');
  }
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i)) {
      results[results.length] = array[i];
    }
  }
  return results;
};
