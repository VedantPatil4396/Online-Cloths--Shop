import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierlogout',
  templateUrl: './supplierlogout.component.html',
  styleUrl: './supplierlogout.component.css'
})
export class SupplierlogoutComponent {

  
  constructor(private http:HttpClient,private router:Router)
  {
    this.supplierLogout()
  }

  supplierLogout()
  {
    localStorage.removeItem('supplierEmail')
    this.router.navigate(['/suppilerlogin'])
    alert("Logout Successfully")
  }


}
