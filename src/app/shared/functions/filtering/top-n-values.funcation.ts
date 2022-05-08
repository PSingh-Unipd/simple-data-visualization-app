/**
 * O(n*ln(n)) - This can be improved, especially space complexity!
 * @param map 
 * @param n 
 * @returns 
 */
export function TopNValues(map: Map<string, number>, n: number): Map<string, number> {
  if (n === 0 || n > map.size) {
    return map;
  }

  const sortedMap: Map<string, number> = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  const result: Map<string, number> = new Map<string, number>();

  for (var i = 0, keys = Object.keys(sortedMap); i < n; i++) {
    let value: number | undefined = sortedMap.get(keys[i]);
    if (value) {
      result.set(keys[i], value);
    }
  }

  return result;
};