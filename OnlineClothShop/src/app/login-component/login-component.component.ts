import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})

export class LoginComponentComponent {
  loginForm:FormGroup;
  
  custEmail:string="";
  custPassword:string="";

  store: any;


     
  constructor(private http: HttpClient,private rout:Router)  {
    

    this.loginForm=new FormGroup({
      
      custEmail:new FormControl("",[Validators.required,Validators.email]),
      custPassword:new FormControl("",[Validators.required])
    });
  }

  handleSubmit(){
   
    console.log(this.custEmail);
    
    console.log(this.custPassword);

    this.http.get(`http://localhost:8080/userlogin/${this.custEmail}/${this.custPassword}`)
    .subscribe(response => {
      this.store=response;
      console.log(this.store);
       if (this.custEmail==this.store.custEmail && this.custPassword==this.store.custPassword) { 
                                                
        localStorage.setItem("custEmail",this.custEmail)
        alert('User Login successfully!');
        this.rout.navigate(['/userhome']); 
      } else {
        alert("User not found or incorrect credentials.");
      }
    },
    error => {
      alert("User not found or incorrect credentials.");
      console.error('Error occurred:', error);
      alert('An error occurred: ' + error.message);
    }
  );
    }
  
}





































































  //     alert('Login Successfully!');
  //     this.loginForm.reset();
  //   }, error => {
  //     console.error('Error for login:', error);
  //     alert('Failed to Login');
  //   });
  // }
   
   
  

