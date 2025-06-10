import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplierComponentComponent } from './supplier-component/supplier-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponentComponent } from './add-product-component/add-product-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { ViewProductsComponentComponent } from './view-products-component/view-products-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { MyhomecomponentComponent } from './myhomecomponent/myhomecomponent.component';
import { AboutuscomponentComponent } from './aboutuscomponent/aboutuscomponent.component';
import { ContactuscomponentComponent } from './contactuscomponent/contactuscomponent.component';
import { PrivacypolicycomponentComponent } from './privacypolicycomponent/privacypolicycomponent.component';
import { ShoppingcartcomponentComponent } from './shoppingcartcomponent/shoppingcartcomponent.component';
import { UsernavigationcomponentComponent } from './usernavigationcomponent/usernavigationcomponent.component';
import { UserhomecomponentComponent } from './userhomecomponent/userhomecomponent.component';
import { UserRegistrationComponentComponent } from './user-registration-component/user-registration-component.component';
import { SupplierregistrationComponent } from './supplierregistration/supplierregistration.component';
import { SuppilerlogincomponentComponent } from './suppilerlogincomponent/suppilerlogincomponent.component';
import { SuppilernavigationComponent } from './suppilernavigation/suppilernavigation.component';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SupplierlogoutComponent } from './supplierlogout/supplierlogout.component';
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';



@NgModule({
  declarations: [
    AppComponent,
    SupplierComponentComponent,
    AddProductComponentComponent,
    SearchComponentComponent,
    LogoutComponentComponent,
    ViewProductsComponentComponent,
    LoginComponentComponent,
    NavbarcomponentComponent,
    MyhomecomponentComponent,
    AboutuscomponentComponent,
    ContactuscomponentComponent,
    PrivacypolicycomponentComponent,
    ShoppingcartcomponentComponent,
    UsernavigationcomponentComponent,
    UserhomecomponentComponent,
    UserRegistrationComponentComponent,
    SupplierregistrationComponent,
    SuppilerlogincomponentComponent,
    SuppilernavigationComponent,
    ProductcomponentComponent,
    SupplierlogoutComponent,
    OrdercomponentComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
