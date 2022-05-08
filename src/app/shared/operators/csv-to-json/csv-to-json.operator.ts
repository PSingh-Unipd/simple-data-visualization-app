import { mergeMap, Observable, of } from "rxjs";
const csv = require('csvtojson');

export function csvToJson<T>(noHeader: boolean) {
	return function(source: Observable<string>): Observable<T> {
		return source.pipe(
			mergeMap(data => csv({ noheader: noHeader, delimiter: 'auto' }).fromString(data) as Observable<T>)
		);
	};
}


