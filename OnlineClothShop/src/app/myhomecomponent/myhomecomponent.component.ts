import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myhomecomponent',
  templateUrl: './myhomecomponent.component.html',
  styleUrl: './myhomecomponent.component.css'
})
export class MyhomecomponentComponent {
 
  validUser: any;
  images = ["BCGG5.jpg","BGG.jpg","BG.jpeg"]

  cards = [
    {
      title: '₹500',
      text: 'Women Fit and Flare light green onepiece Dress',
      imgSrc: 'onepiece.jpg'
    },
    {
      title: '₹350',
      text: 'Men Printed Round Neck Cotton Blend Grey T-Shirt',
      imgSrc: 'T-Shirt.jpg'
    },
    {
      title: '₹700',
      text: 'Embroidered Anarkali Kurta, Bottom & Dupatta Set',
      imgSrc: 'T-Shirt1.jpg'
    },{
      title: '₹649',
      text: 'Embroidered Anarkali Kurta, Bottom & Dupatta Set',
      imgSrc: 'T-Shirt2.jpg'
    },
    {
      title: '₹779',
      text: 'Women Viscose Rayon Kurta Pant Dupatta Set',
      imgSrc: 'kurta.jpg'
    },
    {
      title: '₹2033',
      text: 'indian Embroidered Men Waistcoat',
      imgSrc: 'T-Shirt4.jpg'
    },
    {
      title: '₹1107',
      text: 'indian Embroidered Men Waistcoat',
      imgSrc: 'T-Shirt5.jpg'
    },
    {
      title: '₹379',
      text: 'Oversized Men Printed, Typography Round Neck Pure Cotton Navy Blue T-Shirt',
      imgSrc: 'T-Shirt6.jpg'
    },
    {
      title: '₹299',
      text: 'Pack of 2 TQH Men Sleeveless Men Solid Round Neck Polyester Black, Grey T-Shirt',
      imgSrc: 'T-Shirt7.jpg'
    }
  ];
 


  constructor(private http: HttpClient,private rout:Router)  
  {
  this.validUser = localStorage.getItem("custEmail")
  if(this.validUser=="GUEST")
  {
    console.log(this.validUser)
  this.rout.navigate(['/login']); 
  }

  }
}

