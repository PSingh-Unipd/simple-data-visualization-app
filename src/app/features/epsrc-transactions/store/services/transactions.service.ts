import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { csvToJson } from 'src/app/shared/operators';
import { ITransaction } from '../../interfaces';

@Injectable()
export class TransactionsService {

  constructor(private _http: HttpClient) { }

  getTranscations(value: string): Observable<ITransaction[]> {
    return this._http.get(`assets/dataset/${value}.csv`, { responseType: 'text' }).pipe(
      // map(csv => {
      //   let dummyObj: ITransaction = {
      //     DepartmentFamily: '',
      //     Entity: '',
      //     Date: '',
      //     ExpenseType: '',
      //     ExpenseArea: '',
      //     Supplier: '',
      //     TransactionNumber: '',
      //     Amount: '',
      //     InvoiceCurrencyUnit: ''
      //   };
      //   return formatCsvHeader(csv, Object.keys(dummyObj));
      // }),
      csvToJson<ITransaction[]>(false)
    );
  }
}


// function formatCsvHeader(cvsText: string, objKeys: string[]): string {
//   let csvRows = cvsText.split('\n');
  

//   lines.splice(0,1);
//   // join the array back into a single string
//   var newtext = lines.join('\n');

//   return '';
// }
