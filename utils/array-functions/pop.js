export const pop = (array = []) => {
  if (!Array.isArray(array)) {
    throw new Error('array parameter must be an array');
  }
  if (!array.length) {
    return undefined;
  }
  const lastItem = array[array.length - 1];
  array.length = array.length - 1;
  return lastItem;
};
