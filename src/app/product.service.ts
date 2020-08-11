import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Product} from "./product";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + "/product")
  }

  createProduct(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(API_URL+"/product/", product)
  }

  getProduct(id:number): Observable<Product>{
    return this.httpClient.get<Product>(API_URL+`/product/${id}`)
  }

  updateProduct(id:number, product:Product): Observable<Product>{
    return this.httpClient.put<Product>(API_URL+`/product/${id}`,product)
  }

  deleteProduct(id:number):Observable<Product>{
    return this.httpClient.delete<Product>(API_URL+`/product/${id}`)
  }

  getAllProductByCategory(id:Number):Observable<Product[]>{
    return this.httpClient.get<Product[]>(API_URL+`/category/${id}/products`)
  }
}
