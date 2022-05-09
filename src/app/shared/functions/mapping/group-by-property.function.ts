/**
 * O(n), n = array.length
 * @param array of data
 * @param propertyName 
 * @returns result is HashMap 
 */
export function GroupByPropertyName<T>(array: Array<T>, propertyName: string): Map<string, T[]> {
  const map: Map<string, T[]> = new Map<string, T[]>();
  array.forEach((item: any) => {
    const key = item[propertyName] as string;
    const previousValue = map.get(key);
    if (!previousValue) {
      let tempArray: T[] = [item];
      map.set(key, tempArray);
    } else {
      map.set(key, [...previousValue, item]);
    }
  });

  return map;
};