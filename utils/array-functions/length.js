export const length = (array = []) => {
  if (!Array.isArray(array)) {
    throw new Error('Array parameter must be an array');
  }
  return array.length;
};
