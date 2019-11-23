import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductStatisticalComponent } from './product-statistical/product-statistical.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HompageComponent } from './hompage/hompage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ProductsComponent,
    ProductComponent,
    ProductStatisticalComponent,
    ProductDetailComponent,
    AddProductComponent,
    HompageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
