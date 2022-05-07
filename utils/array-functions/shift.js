export const shift = (array = []) => {
  if (!Array.isArray(array)) {
    throw new Error('array parameter must be an array');
  }
  if (!array.length) {
    return undefined;
  }
  const firstItem = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return firstItem;
};
