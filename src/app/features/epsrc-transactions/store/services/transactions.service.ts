import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { csvToJson } from 'src/app/shared/operators';
import { ITransaction } from '../../interfaces';

@Injectable()
export class TransactionsService {

  constructor(private _http: HttpClient) { }

  getTranscations(value: string): Observable<ITransaction[]> {
    return this._http.get(`assets/dataset/${value}.csv`, { responseType: 'text' }).pipe(
      csvToJson<ITransaction[]>(false)
    );
  }
}

