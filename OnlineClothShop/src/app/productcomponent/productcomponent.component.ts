import { Component } from '@angular/core';
import { Productview } from '../productview';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productcomponent',
  templateUrl: './productcomponent.component.html',
  styleUrl: './productcomponent.component.css'
})
export class ProductcomponentComponent {

  baseUrl = "http://localhost:8080/";

  Product : any;
  custEmail:string = "";
  cart:any={
  productId :'',
  custEmail: "",
 
  }
  param: any;
   searchProduct:any;


  constructor(private http:HttpClient,private rout:Router,private activeroute:ActivatedRoute)
  {
       this.showallProducts()
      
  }
  
  ngOnInit():void{
   const searchbyProducts=this.activeroute.snapshot.params[('search')]
   if(searchbyProducts!=null)
   {
    this.http.get(this.baseUrl+`searchProducts/${searchbyProducts}`).subscribe
    ((data:any)=>
      {
        console.log(data);
        this.Product=data;
        console.log(this.Product);
    
      })
   }
  }


  showallProducts()
  {
    console.log("All Products are showing");
    this.http.get(this.baseUrl+"showallProducts").subscribe
    ((data:any)=>
    {
      console.log(data);
      this.Product=data;
      console.log(this.Product);
  
    })
  }

  addCart(productId: any)
  {
  
    console.log(productId);
    this.cart.productId=productId;
    this.cart.custEmail=localStorage.getItem("custEmail")
    console.log(this.cart);

    this.http.post(`http://localhost:8080/addCartProduct`, this.cart)
    .subscribe(response => {
      
      alert('Product added successfully into the cart!');
      // this.addRecordForm.reset();
      this.rout.navigate(['/shoppingcart'])
    }, error => {
      console.error('Error adding product in thee cart:', error);
      alert('Failed to add product in the cart');
    });
  }


 
    












    
  
    searchbyproductName()
    {
      
    //    this.http.get(this.baseUrl+"getByproductName"+this.productName)
    // .subscribe(success=>{

    //    },
    //     error=>{
    //   console.error('Error for showing products',error);
    //  alert('Failed to show product by name');
        
    //  });
  }

    searchbyproductBrand()
    {
      
    //   this.http.get(this.baseUrl+"getByproductBrand"+this.productBrand)
    //   .subscribe(success=>{
            
    //     },
    //     error=>{
    //     console.error('Error for showing products by brand',error);
    //     alert('Failed to show product by brand');
        
    // });


    }

    
    searchbyproductCategory()
    {
      
    //   this.http.get(this.baseUrl+"getByproductCategory"+this.productCategory)
    //   .subscribe(success=>{

    //     },
    //     error=>{
    //     console.error('Error for showing products by category',error);
    //     alert('Failed to show product by category');
        
    // });


    }
   
  }
  
  
  


    






































  //   addCart(productId: any)
  //   {
  
  //     console.log(productId);
  //     this.cart.productId=productId;
  //     this.cart.custEmail=localStorage.getItem("custEmail")
  // console.log(this.cart);
  
  //     this.http.post(`http://localhost:8080/addCartProduct`, this.cart)
  //     .subscribe(response => {
  //       alert('Product added successfully into the cart!');
  //       // this.addRecordForm.reset();
  //       this.rout.navigate(['/shoppingcart'])
  //     }, error => {
  //       console.error('Error adding product in thee cart:', error);
  //       alert('Failed to add product in the cart');
  //     });
  //   }







  
      // this.http.post("http://localhost:8080/addCartProduct",)
      // .subscribe(response => {
      //   alert('Product added successfully in cart!');
     
      // }, error => {
      //   console.error('Error adding product in cart:', error);
      //   alert('Failed to add product in cart');
      // });




  // function searchbyproductBrand() {
  //   throw new Error('Function not implemented.');
  // }
// function buyNow() {
//   throw new Error('Function not implemented.');
// }


  // products: Productview [] = [
  //   { productId: 1, 
  //     productName: 'Black Jacket',
  //     productCategory:'Jacket',  
  //     productBrand:"Nike",
  //     imgPath :"nike1.jpg",
  //     productQuantity:5,
  //     productFor:"Mens",
  //     age:"19 years onwords",
  //     price: 1000.00,  
  //   },

  //   { productId: 1, 
  //     productName: 'Trouser for girls',
  //     productCategory:'Trousers',  
  //     productBrand:"Fabindia",
  //     imgPath :'zaratrouser.jpg',
  //     productQuantity:5,
  //     productFor:"Woemens",
  //     age:"17 years onwords",
  //     price: 2000.00,  
  //   },
  


  //   { productId: 2, 
  //     productName: 'Grey T shirt',
  //     productCategory:'T-Shirts',  
  //     productBrand:"Fabindia",
  //     imgPath :'T-Shirt.jpg',
  //     productQuantity:10,
  //     productFor:"Kids",
  //     age:"7 years onwords",
  //     price: 999.00,  
  //   },

  //   { productId: 4, 
  //     productName: 'Yellow Kurta Set',
  //     productCategory:'Kurta',  
  //     productBrand:"Zara",
  //     imgPath :'kurta.jpg',
  //     productQuantity:17,
  //     productFor:"Woemens",
  //     age:"21 years onwords",
  //     price: 5000.00,  
  //   },

  //   { productId: 5, 
  //     productName: 'Green colour suit',
  //     productCategory:'One Piece',  
  //     productBrand:"Zara",
  //     imgPath :'onepiece.jpg',
  //     productQuantity:20,
  //     productFor:"womens",
  //     age:"17 years onwords",
  //     price: 1100.00,  
  //   },

  //   { productId: 5, 
  //     productName: 'Blue T Shirt',
  //     productCategory:'T-Shirts',  
  //     productBrand:"Levis",
  //     imgPath :'T-Shirt6.jpg',
  //     productQuantity:55,
  //     productFor:"Mens",
  //     age:"17 years onwords",
  //     price: 999.00,  
  //   },
  // ];





  

  //   // { productId: 6, productName: 'Polo-Shirt',productCategory:'t-shirt', imgPath: 'img3.jfif', price: 1299.00,  },
  //   // { productId: 7, productName: ' Allen solly t-Shirt',productCategory:'t-shirt',imgPath: 'img_7.jfif', price: 1199.00,  },
  //   // { productId: 8, productName: 'T-Shirt',productCategory:'t-shirt', imgPath: 'img_8.jfif', price: 799.00, },
  //   // { productId: 9, productName: 'Jeans',productCategory:'jeans', imgPath: 'jeans1.jfif', price: 599.00,  },
  //   // { productId: 10, productName: 'Jeans',productCategory:'jeans', imgPath: 'img7.jfif', price: 666.00, },
  //   // {productId: 11, productName: 'Jeans',productCategory:'salwar', imgPath: 'salwar1.JPEG',  price: 999.00,  },
  //   // { productId: 12, productName: 'Aurelia',productCategory:'salwar', imgPath: 'salwar2.JPEG', price: 999.00, },
  //   // { productId: 13, productName: 'Janasya',productCategory:'salwar',imgPath: 'salwar3.JPEG', price: 899.00},


