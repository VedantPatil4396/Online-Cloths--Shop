import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppilerlogincomponent',
  templateUrl: './suppilerlogincomponent.component.html',
  styleUrl: './suppilerlogincomponent.component.css'
})
export class SuppilerlogincomponentComponent {


  suppilerloginForm:FormGroup;
  
  supplierEmail:string="";
  password:string="";
  store: any;
  validUser: any;


     
  constructor(private http: HttpClient,private rout:Router)  {
    this.suppilerloginForm=new FormGroup({
      supplierEmail:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required])
    });
  }

  handleSubmit(){
    console.log(this.supplierEmail);
    console.log(this.password);

    this.http.get(`http://localhost:8080/suppilerlogin/${this.supplierEmail}/${this.password}`)
    .subscribe(response => {
      this.store=response;
      console.log(this.store);
      if (this.supplierEmail && this.store.password) { 
        localStorage.setItem('supplierEmail',this.store.supplierEmail);
        alert('Suppilerr Login successfully!');
        this.rout.navigate(['/supplierhome']); 
      } else {
        alert("Suppiler not found or incorrect credentials.");
      }
    },
    error => {
      console.error('Error occurred:', error);
      alert('An error occurred: ' + error.message);
    }
  );
}
}
