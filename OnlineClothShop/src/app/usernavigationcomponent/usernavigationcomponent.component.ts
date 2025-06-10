import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usernavigationcomponent',
  templateUrl: './usernavigationcomponent.component.html',
  styleUrl: './usernavigationcomponent.component.css'
})
export class UsernavigationcomponentComponent {

  search:string="";

  constructor(private route:Router){


  }

  searchProducts(){

    this.route.navigate([`/products/${this.search}`])

  }


}
