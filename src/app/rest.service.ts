import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://localhost:3000/api/v1/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProdutos(): Observable<any> {
    return this.http.get(this.endpoint + 'products').pipe(
      map(this.extractData));
  }
  
  getProduto(id): Observable<any> {
    return this.http.get(this.endpoint + 'products/' + id).pipe(
      map(this.extractData));
  }
  
  addProduto (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(this.endpoint + 'products', JSON.stringify(product), this.httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }
  
  updateProduto (id, product): Observable<any> {
    return this.http.put(this.endpoint + 'products/' + id, JSON.stringify(product), this.httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  
  deleteProduto (id): Observable<any> {
    return this.http.delete<any>(this.endpoint + 'produtos/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
