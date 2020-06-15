import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DdnService {

  constructor(private http: HttpClient) { }

  getDDN(edn: number): Observable<any> {
    const url = '/api/ddn/' + edn;
    return this.http.get(url);
  }
}
