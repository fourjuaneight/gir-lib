/**
 * Sort an object by key.
 */
export const sortObjectByKey = <T>(obj: T, key: string): T => {
  const sorted = obj.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });

  return sorted;
};
