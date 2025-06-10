import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhomecomponent',
  templateUrl: './userhomecomponent.component.html',
  styleUrl: './userhomecomponent.component.css'
})
export class UserhomecomponentComponent {

  validUser:any
  images = ["BCGG5.jpg","BGG.jpg","BG.jpeg"]

  cards = [
    {
      productId:1,
      price: 500,
      productName: 'Women Fit and Flare light green onepiece Dress',
      imgPath: 'onepiece.jpg'
    },
    {
      productId:2,
      price: 350,
      productName: 'Men Printed Round Neck Cotton Blend Grey T-Shirt',
      imgPath: 'T-Shirt.jpg'
    },
    {
      productId:3,
      price: 700,
      productName: 'Embroidered Anarkali Kurta, Bottom & Dupatta Set',
      imgPath: 'T-Shirt1.jpg'
    },{
      productId:4,
      price: 649,
      productName: 'Embroidered Anarkali Kurta, Bottom & Dupatta Set',
      imgPath: 'T-Shirt2.jpg'
    },
    { productId:5,
      price: 779,
      productName: 'Women Viscose Rayon Kurta Pant Dupatta Set',
      imgPath: 'kurta.jpg'
    },
    {
      productId:6,
      price: 2033,
      productName: 'indian Embroidered Men Waistcoat',
      imgPath: 'T-Shirt4.jpg'
    },
    {
      productId:7,
      price: 1107,
      productName: 'indian Embroidered Men Waistcoat',
      imgPath: 'T-Shirt5.jpg'
    },
    { productId:8,
      price: 379,
      productName: 'Oversized Men Printed, Typography Round Neck Pure Cotton Navy Blue T-Shirt',
      imgPath: 'T-Shirt6.jpg'
    },
    { productId:9,
      price: 299,
      productName: 'Pack of 2 TQH Men Sleeveless Men Solid Round Neck Polyester Black, Grey T-Shirt',
      imgPath: 'T-Shirt7.jpg'
    }
  ];

  constructor(private http: HttpClient,private rout:Router) 
  {
    // this.validUser = localStorage.getItem("custEmail")
    // if(this.validUser=="GUEST"){
    //   console.log(this.validUser)
    //   this.rout.navigate(['/login']); 
    // }
    }
  
   
  
  buyNow()
  {

    const cart = {
       
      id:Number,
      productId:Number,
      price : Number,
      productName: String,
      imgPath:String,
      cartPrice:Number,
      productQuantity:Number,
      productCategory:String


    };

    console.log(cart);
    

    this.http.post("http://localhost:8080/addCartProduct",cart)
    .subscribe(response => {
      alert('Product added successfully in cart!');
   
    }, error => {
      console.error('Error adding product in cart:', error);
      alert('Failed to add product in cart');
    });
  }
  
}
