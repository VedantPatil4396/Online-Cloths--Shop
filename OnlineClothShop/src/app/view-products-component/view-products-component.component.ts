import { Component } from '@angular/core';
import { Productview } from '../productview';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-products-component',
  templateUrl: './view-products-component.component.html',
  styleUrl: './view-products-component.component.css'
})
export class ViewProductsComponentComponent {

  
baseUrl : string = "http://localhost:8080";
supplierEmail:any;

productName: string="";
productBrand: string="";
productCategory: string="";

constructor(private http:HttpClient,private rout:Router)
{
    //  this.showallProducts()
     this.showallProductsBysupplierEmail()
   

}

Product !: any[];


showallProductsBysupplierEmail() {
  this.supplierEmail= localStorage.getItem("supplierEmail");
    console.log("supplierEmail : ",this.supplierEmail);
  console.log("All Products are showing (related to specific supplier)");
  
  this.http.get(`${this.baseUrl}/showallProductsByEmail/${this.supplierEmail}`).subscribe(
  
    (data: any) => {
      
      console.log(data);
      this.Product=data;
     
      
    },
    error => {
      console.log('Error fetching products', error);
    }
  );
}


deletebyId(productId:any)
{

  console.log(productId);
  // this.Product.productId=productId;
  // this.cart.custEmail=localStorage.getItem("custEmail")
  // console.log(this.cart);

  this.http.delete(`http://localhost:8080/deleteById/${productId}`)
  .subscribe((response:any) => {
    console.log("response from spring : ",response);
    
    if (response==1) {  
      this.rout.navigate(['/view'])
      
    }
    //alert('Product delete successfully');
    // this.addRecordForm.reset();
  }, error => {
    console.error('Error for deleteing product', error);
    alert('Failed to delete product');
  });
}

updateProduct(productId: any)
{
  this.http.put(`http://localhost:8080/updateProduct/${productId}`,this.Product)
  .subscribe(response => {
    
    alert('Product updated successfully');
    // this.addRecordForm.reset();
    this.rout.navigate(['/view'])
  }, error => {
    console.error('Error for updating product', error);
    alert('Failed to update product');
  })
}

}























































// buyNow()
// {

//   const cart = {  
//     id:Number,
//     productId:Number,
//     price : Number,
//     productName: String,
//     imgPath:String,
//     cartPrice:Number,
//     productQuantity:Number,
//     productCategory:String


//   };

//   console.log(cart);
  

//   this.http.post("http://localhost:8080/addCartProduct",cart)
//   .subscribe(response => {
//     alert('Product added successfully in cart!');
 
//   }, error => {
//     console.error('Error adding product in cart:', error);
//     alert('Failed to add product in cart');
//   });
// }


// }


  // viewProducts:Productview[]=[

  //   {
  //     productName:"T Shirts",
  //     productId:5,
  //     productCategory:"Sports",
  //     productBrand:"Nike",
  //     age:"Between 5y to 10y",
  //     productQuantity:17,
  //     productFor:"Kids",
  //     price:500,
  //    imgPath:"nike10.jpg"
  //   },

  //   {
  //     productName:"Silk Jacket",
  //     productId:7,
  //     productCategory:"Jackets",
  //     productBrand:"Fabindia",
  //     age:"Between 18y to 25y",
  //     productQuantity:30,
  //     productFor:"Mens",
  //     price:3000,
  //    imgPath:"fabjacket.jpg"
  //   },

  //   {
  //     productName:"High Waist Trousers",
  //     productId:9,
  //     productCategory:"Trousers",
  //     productBrand:"Zara",
  //     age:"Between 5y to 10y",
  //     productQuantity:50,
  //     price:2590,
  //     productFor:"Womens",
  //    imgPath:"zaratrouser.jpg"
  //   },

  //   {
  //     productName:"Regular Fit Thermal",
  //     productId:13,
  //     productCategory:"Tops",
  //     productBrand:"Levis",
  //     age:"Between 7y to 13y",
  //     productQuantity:23,
  //     price:647,
  //     productFor:"Mens",
  //     imgPath:"thermal.jpg"
  //   },


  // ];










  // showallProducts()
// {
//   console.log("All Products are showing");
//   this.http.get(this.baseUrl+"showallProducts").subscribe
//   ((data:any)=>
//   {
//     console.log(data);
//     this.Product=data;
//     console.log(this.Product);

//   })

// }


// showallProductsBysupplierEmail()

// {
//   console.log("All Products are showing (related to specific suppiler)");
  
//   this.http.get(`this.baseUrl+showallProducts/${this.suppilerEmail}`).subscribe
//   ((data:any)=>
//   {
//     console.log(data);
//     this.Product=data;
//     console.log(this.suppilerEmail);

//   })
// }