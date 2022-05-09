export const indexOf = (array = [], value) => {
  if (!Array.isArray(array)) {
    throw new TypeError('array parameter must be a array');
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
};
