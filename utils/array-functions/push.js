export const push = (array = [], ...value) => {
  if (!Array.isArray(array)) {
    throw new Error('array parameter must be an array');
  }
  for (let i = 0; i < value.length; i++) {
    array[array.length] = value[i];
  }
  return array.length;
};
