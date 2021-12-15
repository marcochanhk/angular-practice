import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { User } from '../models/core.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     Authorization: 'my-auth-token'
  //   })
  // };

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<HttpResponse<User>> {
    return this.http.get<User>('user', { observe: 'response' })
    .pipe(
      catchError((err, caught) => {
        return this.handleError(err);
      })
    );
  }

  // addUser(user: User): Observable<HttpResponse<User>> {
  //   return this.http.post<User>('user', user, this.httpOptions).toPromise();
  // }

  // Backend Error Handling
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
