import { Component } from '@angular/core';
import { Supplierproducts } from '../supplierproducts';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-component',
  templateUrl: './supplier-component.component.html',
  styleUrl: './supplier-component.component.css'
})
export class SupplierComponentComponent {


  validUser: any;
  images = ["sup6.jpg","sup4.jpg","sup5.jpg"]
  // SProductsInfo: Supplierproducts[] = [

  //   {
  //     productName: "Nike Jackets",
  //     productPrice: 880,
  //     imgPath: "nike1.jpg",
  //     productQunatity: 15
  //   },
  //   {
  //     productName: "Nike Track",
  //     productPrice: 2000,
  //     imgPath: "nike3.jpg",
  //     productQunatity: 20
  //   },
  //   {
  //     productName: "Nike Hoodies",
  //     productPrice: 2500,
  //     imgPath: "nikeh.jpg",
  //     productQunatity: 37

  //   },
  //   {
  //     productName: "Nike T-Shirts",
  //     productPrice: 499,
  //     imgPath: "nike4.jpg",
  //     productQunatity: 25

  //   },
  //   {
  //     productName: "Adidas Suit",
  //     productPrice: 850,
  //     imgPath: "adi1.jpg",
  //     productQunatity: 5
  //   },
  //   {
  //     productName: "Adidas Cargo",
  //     productPrice: 3000,
  //     imgPath: "adicargo.jpg",
  //     productQunatity: 9
  //   },
  //   {
  //     productName: "Adidas Strips T-Shirts",
  //     productPrice: 900,
  //     imgPath: "adistrips.jpg",
  //     productQunatity: 17
  //   },
  //   {
  //     productName: "Adidas T-Shirts",
  //     productPrice: 1250,
  //     imgPath: "aditshirts.jpg",
  //     productQunatity: 19
  //   }
  // ];

  
  constructor(private http: HttpClient,private rout:Router)  
  {
  this.validUser = localStorage.getItem("supplierEmail")
  if(this.validUser=="GUEST")
  {
    console.log(this.validUser)
  this.rout.navigate(['/suppilerlogin']); 
  }

  }

}


