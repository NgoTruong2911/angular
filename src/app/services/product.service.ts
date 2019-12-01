import { Injectable } from '@angular/core';
import { ProductData } from '../MockData';
import { Product } from '../Product';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = 'http://5dd7760b0a27af00149fcefc.mockapi.io/products';
  constructor(
    private http: HttpClient
  ) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.products);
  }
  onDelete(id):Observable<Product>{
    return this.http.delete<Product>(`${this.products}/${id}`);
  }
  addProduct(product):Observable<Product>{
    return this.http.post<Product>(`${this.products}`,product);
  }
  getProduct(id):Observable<Product>{
    return this.http.get<Product>(`${this.products}/${id}`);
  }
  updateProduct(product):Observable<Product>{
    return this.http.put<Product>(`${this.products}/${product.id}`,product);
  }
  // onDelete(id):Product[]{
  //   return this.products = this.products.filter(item => item.id != id);
  // }
}

