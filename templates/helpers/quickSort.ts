// Util
const equal = (a: any, b: any): boolean => compare(a, b) === 0;
const lessThan = (a: any, b: any): boolean => compare(a, b) < 0;

/**
 * Quick sort.
 * @function
 *
 * @param  {number[]} originalArray
 *
 * @return {number[]}
 */
export const quickSort = (originalArray: number[]): number[] => {
  // Clone original array to prevent it from modification.
  const array = [...originalArray];

  // If array has less than or equal to one elements then it is already sorted.
  if (array.length <= 1) {
    return array;
  }

  // Init left and right arrays.
  const leftArray: number[] = [];
  const rightArray: number[] = [];

  // Take the first element of array as a pivot.
  const pivotElement = array.shift();
  const centerArray = [pivotElement];

  // Split all array elements between left, center and right arrays.
  while (array.length) {
    const currentElement = array.shift();

    if (equal(currentElement, pivotElement)) {
      centerArray.push(currentElement);
    } else if (lessThan(currentElement, pivotElement)) {
      leftArray.push(currentElement);
    } else {
      rightArray.push(currentElement);
    }
  }

  // Sort left and right arrays.
  const leftArraySorted = quickSort(leftArray);
  const rightArraySorted = quickSort(rightArray);

  // Let's now join sorted left array with center array and with sorted right array.
  return leftArraySorted.concat(centerArray, rightArraySorted);
};
