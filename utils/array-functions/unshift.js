export const unshift = (array = [], ...values) => {
  if (!Array.isArray(array)) {
    throw new Error('array parameter must be an array');
  }
  if (values.length) {
    const arrayCopy = [...array];
    array.length = array.length + values.length;
    for (let i = 0; i < values.length; i++) {
      array[i] = values[i];
    }
    for (let i = 0; i < arrayCopy.length; i++) {
      array[i + values.length] = arrayCopy[i];
    }
  }
  return array.length;
};
