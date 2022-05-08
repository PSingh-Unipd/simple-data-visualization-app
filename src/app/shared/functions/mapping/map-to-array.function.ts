/**
 * O(n), n = map.size
 * @param map 
 * @returns 
 */
export function MapToArray(map: Map<any, any>): Array<any> {
  return Array.from(map, ([key, value]) => ({ [key]: value }));
}