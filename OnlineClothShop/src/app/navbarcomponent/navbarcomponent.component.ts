import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbarcomponent',
  templateUrl: './navbarcomponent.component.html',
  styleUrl: './navbarcomponent.component.css'
})
export class NavbarcomponentComponent {
  
  search:string="";

  constructor(private route:Router){


  }

  searchallProducts()
  {
    console.log(this.search)
  }

}

















































// searchallProducts()
  // {
  
    //this.route.navigate(['/productssearch/${this.search}']);
    // console.log("csgfd",this.search)
    
  //      this.http.get(`${this.baseUrl}/searchProducts/${this.param}`)
  //    .subscribe(success=>{
      
  //         this.showallProducts()
  //      },
  //      error=>{
  //      console.error('Error for showing products',error);
  //     alert('Failed to show product by name');
        
  //  });
  


