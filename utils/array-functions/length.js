export const length = (array = []) => {
  if (!Array.isArray(array)) {
    throw new Error('array parameter must be an array');
  }
  return array.length;
};
