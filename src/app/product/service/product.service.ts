import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BASE_URL } from '../../app.config';
import { Observable, tap } from 'rxjs';
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
      private baseUrl:string = inject(BASE_URL);
      private http:HttpClient = inject(HttpClient);

      getAllProducts():Observable<IProduct[]>{
          return this.http.get<IProduct[]>(`${this.baseUrl}/products`)
                          .pipe(
                            tap(data=>console.log(data))
                          );
      }
      createPdf(){
        return this.http.get(`${this.baseUrl}/PDFs`, {responseType: 'blob'})
                        .pipe(
                          tap(data=>console.log(data))
                        )
      }
      
}
