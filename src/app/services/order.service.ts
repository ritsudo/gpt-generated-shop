import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../Dto/order.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) { 
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  sendOrder(order: Order): Observable<Order> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Add other headers if needed
    });

    return this.http.post<Order>(`${this.apiUrl}/sendOrder`, order, { headers })
    .pipe(
      catchError(this.handleError)
    );
  }
}
