import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root2 } from '../product/product.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) {} 
  
    getProducts(): Observable<Root2> {
      return this._http.get<Root2>('https://api.escuelajs.co/api/v1/products');
    }  
 }