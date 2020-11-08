import * as React from "react"; 

export const useArray = (initialArray = []) => {
  const [array, setArray] = React.useState(initialArray);

  const prependItem = React.useCallback((item) => {
    setArray(array => [
      item,
      ...array
    ]);
  }, []);

  const appendItem = React.useCallback((item) => {
    setArray(array => [
      ...array,
      item
    ]);
  }, []);

  // let's assume that it's a primitive
  const removeItem = React.useCallback((item) => {
    setArray(array => array.filter(el => el !== item));
  }, []);

  return {
    array,
    prependItem,
    appendItem,
    removeItem
  };
}
