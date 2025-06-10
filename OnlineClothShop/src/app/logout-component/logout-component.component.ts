import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-component',
  templateUrl: './logout-component.component.html',
  styleUrl: './logout-component.component.css'
})
export class LogoutComponentComponent {

  constructor(private http:HttpClient,private router:Router)
  {
    this.customerLogout()
   
  }

customerLogout()
{
  localStorage.removeItem('custEmail')
  this.router.navigate(['/login'])
  alert("Logout Successfully")
}



}
