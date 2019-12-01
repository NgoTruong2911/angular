import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-statistical',
  templateUrl: './product-statistical.component.html',
  styleUrls: ['./product-statistical.component.css']
})
export class ProductStatisticalComponent implements OnInit {
  products: Product[];
  constructor(private productService:ProductService) { 
  }

  ngOnInit() {
    // this.getProducts();
  }
  // getProducts(){
  //   this.products = this.productService.getProducts();
  // }
  // onDelete(id){
  //   this.products = this.productService.onDelete(id);
  // }
  selectedProduct: Product;
  DetailProduct(product){
    this.selectedProduct = product;
  }
}
