import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration-component',
  templateUrl: './user-registration-component.component.html',
  styleUrl: './user-registration-component.component.css'
})
export class UserRegistrationComponentComponent {

  user:any={}

  userForm: FormGroup;
  custEmail:string="";
  custPassword:string="";
  custName:string="";
  custAddress:string="";
  custContact:number=0;


  constructor(private http:HttpClient, private route:Router) {
    this.userForm = new FormGroup({
      custEmail:new FormControl("",[Validators.required,Validators.email]),
      custName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      custContact: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      custAddress:new FormControl ('', [Validators.required, Validators.minLength(10)]),
      custPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    
     
    })
   
  }

  registerUser()
{
  
  console.log(this.userForm.value)

  this.http.post('http://localhost:8080/userregister',this.userForm.value).subscribe
  (response => {
    console.log('User registered successfully', response);
    alert('User Registered successfully!');
    this.route.navigate(['login']);
  }, error => {
    console.error('Error registering user', error);
  });
}
}
