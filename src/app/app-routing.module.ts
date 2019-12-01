import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HompageComponent } from './hompage/hompage.component';
import { ProductStatisticalComponent } from './product-statistical/product-statistical.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  {path: "",redirectTo:'/homepage',pathMatch:'full'},
  { path: "products", component:ProductsComponent},
  { path: "products-manager", component:ProductStatisticalComponent},
  { path: "homepage", component:HompageComponent},
  { path: "product/add", component:ProductAddComponent},
  { path: "product/:id", component:ProductDetailComponent},
  { path: "product/edit/:id", component:ProductEditComponent},
  { path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
