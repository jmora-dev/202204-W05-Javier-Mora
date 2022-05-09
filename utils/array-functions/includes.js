export const includes = (array = [], value) => {
  if (!Array.isArray(array)) {
    throw new TypeError('array parameter must be a array');
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
};
