import { Component, OnInit } from '@angular/core';
import { ProductData } from '../MockData';
import { Product } from '../Product';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(data=>{
      console.log(data);
      this.products = data;
    })
  }

  // products = ProductData;
  
  onDelete(id){
    this.productService.onDelete(id).subscribe(data=>{
      this.products = this.products.filter(product => product.id !=data.id);
    })
  }
  // selectedProduct: Product;
  // DetailProduct(product){
  //   this.selectedProduct = product;
  // }


}
