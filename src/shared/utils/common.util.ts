export function sleep(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export function byteToKb(bytes: number) {
  return bytes / 1000;
}

// Used to map array elements in order to check if they are present in array
export function stringArrayToMap(array: string[]): Map<string, boolean> {
  const map: Map<string, boolean> = new Map<string, boolean>();

  for (let i = 0; i < array.length; i++) {
    map.set(array[i], true);
  }

  return map;
}

/**
 * @description Removes elements in first array present in the second array
 * @param firstArray
 * @param secondArray
 */
export function removeDuplicates<T extends string>(firstArray: T[], secondArray: T[]): T[] {
  const map = stringArrayToMap(secondArray);

  return firstArray.filter(
    element => !map.get(element)
  );
}

/**
 * @description Merges two arrays, removing duplicates if any
 * @param firstArray
 * @param secondArray
 */
export function mergeArraysWithNoDuplicates<T extends string>(firstArray: T[], secondArray: T[]): T[] {

  return [
    ...removeDuplicates(firstArray, secondArray),
    ...secondArray
  ]
}
