import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartDetailsComponent } from './component/cart-details/cart-details.component';
import { CartStatusComponent } from './component/cart-status/cart-status.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ProductCategoryMenuComponent } from './component/product-category-menu/product-category-menu.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { SearchComponent } from './component/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CartDetailsComponent,
    CartStatusComponent,
    CheckoutComponent,
    ProductCategoryMenuComponent,
    ProductDetailsComponent,
    ProductListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
