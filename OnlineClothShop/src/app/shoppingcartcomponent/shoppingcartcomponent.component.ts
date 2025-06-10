import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Product {
  id: number;
  productName: string;
  productCategory: string;
  price: number;
  productQuantity: number;
  imageUrl: string;
  cartPrice:number
}


@Component({
  selector: 'app-shoppingcartcomponent',
  templateUrl: './shoppingcartcomponent.component.html',
  styleUrl: './shoppingcartcomponent.component.css'
})
export class ShoppingcartcomponentComponent {


  
  
baseUrl : string = "http://localhost:8080/";
custEmail:any;
Product : any[]=[];

order:any={
  productId :'',
  custEmail: "",
  }


// productName: string="";
// productBrand: string="";
// productCategory: string="";

constructor(private http:HttpClient,private rout:Router)
{
    //  this.showallProducts()
     this.dataHandler()

}


dataHandler(){
  
  this.custEmail = localStorage.getItem("custEmail");

  this.http.get(`${this.baseUrl}showcartProductsBycustEmail/${this.custEmail}`).subscribe(
    (data:any) => {
      let proId: any = [];
      console.log(data)
      for( let i of data){
        proId.push(i.productId)
        console.log(i.productId)
      }

      for(let i of proId){
        this.http.get(`${this.baseUrl}getById/${i}`).subscribe(
          data=>{
            console.log(data);
           this.Product.push(data)
      
          },error=>{
            console.log(error);            
          }
        )
      }

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
      this.rout.navigate(['/shoppingcart'])
      
    }
    //alert('Product delete successfully');
    // this.addRecordForm.reset();
  }, error => {
    console.error('Error for deleteing product', error);
    alert('Failed to delete product');
  });
}



buyNow(productId: any){
  console.log(productId);
    this.order=productId;
    this.order.custEmail=localStorage.getItem("custEmail")
    console.log(this.order);

    this.http.post(`http://localhost:8080/addOrder`, this.order)
    .subscribe(response => {
      
      alert('Order Place successfully into the cart!');
      // this.addRecordForm.reset();
      this.rout.navigate(['/shoppingcart'])
    }, error => {
      console.error('Error for placing order:', error);
      alert('Failed to order product');
    });


}
























// showcartProducts()
// {
//   console.log("All Products are showing");
//   this.http.get(this.baseUrl+"showCartProducts").subscribe
//   ((data:any)=>
//   {
//     console.log(data);
//     this.Product=data;
//     console.log(this.Product);

//   })

// }

// showcartProductsBycustEmail() {


//   this.custEmail = localStorage.getItem("custEmail");
//   console.log("custEmail:", this.custEmail);
//   console.log("All Products in cart are showing (related to specific user)");

//       this.http.get(`${this.baseUrl}showcartProductsBycustEmail/${this.custEmail}`).subscribe(
//         (data: any) => {
//           console.log(data);
     
//       data.forEach((datat: any) => {
//         console.log(datat.productId)
//         this.http.get(`${this.baseUrl}getById/${datat.productId}`).subscribe((data:any)=>{
//           console.log(data);
//           this.Product = data;
//         })

//       });



//     },
//     error => {
//       console.log('Error fetching products', error);
//     }
//   );
// }


// showcartProductsBycustEmail() {
//   this.custEmail = localStorage.getItem("custEmail");

//   console.log("custEmail:", this.custEmail);
//   console.log("All Products in cart are showing (related to specific user)");

//   this.http.get(`${this.baseUrl}showcartProductsBycustEmail/${this.custEmail}`).subscribe(
//     (data: any) => {
//       console.log(data);
      
//       const productDetails: any[] = [];
//       const requests = data.map((datat: any) => {
//         console.log("Data is " + JSON.stringify(datat));
        
//         return this.http.get(`${this.baseUrl}getById/${datat.productId}`).toPromise();
//       });

//       Promise.all(requests).then((responses: any[]) => {
//         responses.forEach(response => {
//           console.log(response);
//           productDetails.push(response);
//         });
//         this.Product = productDetails;
//       }).catch(error => {
//         console.log('Error fetching product details', error);
//       });
//     },
//     error => {
//       console.log('Error fetching products', error);
//     }
//   );
// }

























  increaseQuantity(index: number): void {
    this.Product[index].productQuantity++;
  }

  decreaseQuantity(index: number): void {
    if (this.Product[index].productQuantity > 1) {
      this.Product[index].productQuantity--;
    } else {
      this.Product.splice(index, 1);
    }
  }

  getCartPrice(): number {
    return this.Product.reduce((total: number, Product: { productQuantity: number; price:number;}) => total + (Product.price * Product.productQuantity), 0);
  }

}

   // products: Product[] = 
  // [
    // {
    //   cardId: 'C124',
    //   productName: 'Women Printed Viscose Rayon Straight Kurta (Black)',
    //   category: 'Kurta',
    //   price: 299.00,
    //   productQuantity: 3,
    //   imageUrl: 'cartimage1.jpeg'sys as sssss
    // },
    // {
    //   cardId: 'C125',
    //   productName: 'Pink Cotton kurta',
    //   category: 'kurta',
    //   price: 499.00,
    //   productQuantity: 3,
    //   imageUrl: 'cartimage2.jpeg'
    // },
    // {
    //   cardId: 'C123',
    //   productName: 'Women printed pure cotton flared kurta',
    //   category: 'maxi',
    //   price: 568.00,
    //   productQuantity: 3,
    //   imageUrl: 'cartimage3.jpeg'
    // },
    // {
    //   cardId: 'C124',
    //   productName: 'Woven Banarasi Pure Silk, Art Silk Saree  (Multicolor)',
    //   category: 'saree',
    //   price: 799.00,
    //   productQuantity: 3,
    //   imageUrl: 'cartimage4.jpeg'
    // },
    // {
    //   // cardId: 'C125',
    //   productName: 'Gray Banarasi Pure Silk, Art Silk Saree',
    //   productcategory: 'saree',
    //   price: 799.00,
    //   productQuantity: 3,
    //   imageUrl: 'cartimage5.jpeg'
    // }
// ];


  



