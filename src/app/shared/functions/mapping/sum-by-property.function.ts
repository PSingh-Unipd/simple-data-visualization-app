/**
 * O(n), n = array.length
 * @param array of data
 * @param keyNames properties names (exemple {byProperty: 'Supplier', valueProperty: 'Amount'} => sum of all amounts values by supplier)
 * @returns result is HashMap 
 */
export function SumByPropertyName(array: Array<any>, keyNames: { byProperty: string, valueProperty: string }): Map<string, number> {
  const map: Map<string, number> = new Map<string, number>();

  array.forEach((item) => {
    const key = item[keyNames.byProperty];
    const previousValue = map.get(key);
    if (!previousValue) {
      map.set(key, parseInt(item[keyNames.valueProperty], 10));
    } else {
      map.set(key, previousValue + parseInt(item[keyNames.valueProperty], 10));
    }
  });

  return map;
};