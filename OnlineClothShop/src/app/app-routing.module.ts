import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { SupplierComponentComponent } from './supplier-component/supplier-component.component';
import { AddProductComponentComponent } from './add-product-component/add-product-component.component';
// import { SearchComponentComponent } from './search-component/search-component.component';
// import { LogoutComponentComponent } from './logout-component/logout-component.component';
 //import { ViewProductsComponentComponent } from './view-products-component/view-products-component.component';
 import { LoginComponentComponent } from './login-component/login-component.component';
import { HttpClientModule } from '@angular/common/http';
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
import { ViewProductsComponentComponent } from './view-products-component/view-products-component.component';
import { SuppilernavigationComponent } from './suppilernavigation/suppilernavigation.component';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { SupplierlogoutComponent } from './supplierlogout/supplierlogout.component';
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';


const routes: Routes = [ 
  // {path:"",component:SupplierComponentComponent},

  {path:"view",component:ViewProductsComponentComponent},
  // {path:"search",component:SearchComponentComponent},
  // {path:"logout",component:LogoutComponentComponent},

  // {path:'',component:MyhomecomponentComponent},
  {path:"supplierhome",component:SupplierComponentComponent},
  {path:"addProduct",component:AddProductComponentComponent},

{path:'',component:MyhomecomponentComponent},
{path:'login',component:LoginComponentComponent},
{path:"supplierhome",component:SupplierComponentComponent},
{path:"addProduct",component:AddProductComponentComponent},
{path:"aboutus",component:AboutuscomponentComponent},
{path:"contactus",component:ContactuscomponentComponent},
{path:"privacy",component:PrivacypolicycomponentComponent},
{path:"shoppingcart",component:ShoppingcartcomponentComponent},
{path:"usernav",component:UsernavigationcomponentComponent},
{path:"userhome",component:UserhomecomponentComponent},
{path:"userregister",component:UserRegistrationComponentComponent},
{path:"suppilerregister",component:SupplierregistrationComponent},
{path:"suppilerlogin",component:SuppilerlogincomponentComponent},
{path:"suppilernav",component:SuppilernavigationComponent},
{path:"products",component:ProductcomponentComponent},
{path:"custlogout",component:LogoutComponentComponent},
{path:"supplierlogout",component:SupplierlogoutComponent},
{path:"order",component:OrdercomponentComponent},
{path:"products/:search",component:ProductcomponentComponent}


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
  
})
export class AppRoutingModule {}

 