import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { observable, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // headers: HttpHeaders = new HttpHeaders({
  //   'Content-type': 'application-/json',
  //   Accept: 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': '*',
  //   'Access-Control-Allow-Headers':
  //     'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization',
  // });

  // constructor(private httpClient: HttpClient) {}

  // getOptions(params?: HttpParams) {
  //   return {
  //     headers: this.headers,
  //     params,
  //   };
  // }

  // get(
  //   serviceType: string,
  //   serviceEndpoint: string,
  //   params: HttpParams
  // ): Observable<any> {
  //   const url = '/' + serviceType + '/' + serviceEndpoint;
  //   return this.httpClient.get(url, this.getOptions(params));
  // }

  // getHTML(
  //   serviceType: string,
  //   serviceEndpoint: string,
  //   params: HttpParams
  // ): Observable<any> {
  //   const url = '/' + serviceType + '/' + serviceEndpoint;
  //   const options: any = this.getOptions(params);
  //   options.responseType = 'text';
  //   return this.httpClient.get(url, options);
  // }

  // handleError(error: HttpErrorResponse) {
  //   console.log(error);
  //   let errorMessage;
  //   if (error.error instanceof ErrorEvent) {
  //     errorMessage = 'Error: ' + error.error.message;
  //   } else {
  //     errorMessage =
  //       'Error code: ' +
  //       error.status +
  //       '\n' +
  //       'Error message: ' +
  //       error.message;
  //   }
  //   return throwError(errorMessage);
  // }
}
