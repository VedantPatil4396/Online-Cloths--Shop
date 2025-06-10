import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierregistration',
  templateUrl: './supplierregistration.component.html',
  styleUrl: './supplierregistration.component.css'
})
export class SupplierregistrationComponent {


  supplierForm: FormGroup;

  shopName:string="";
  gstNumber:number=0;
  supplierName:string="";
  supplierEmail:string="";
  supplierContact:number=0;;
  shopAddress:string="";
  password:string="";
  imgPath:string=""


  constructor(private http:HttpClient, private route:Router) {
    this.supplierForm = new FormGroup({

      shopName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      gstNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}$')]),
      supplierName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      supplierEmail: new FormControl('', [Validators.required, Validators.email]),
      supplierContact: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      shopAddress:new FormControl('', [Validators.required, Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      imgPath: new FormControl(''),
     
    });
  }

  registerSuppiler()
  {
    
    console.log(this.supplierForm.value)
  
    this.http.post('http://localhost:8080/suppilerregister',this.supplierForm.value).subscribe(response => {
      console.log('Suppiler registered successfully', response);
      alert('Suppiler Registered successfully!');
      this.route.navigate(['suppilerlogin'])
      
    }, error => {
      console.error('Error registering suppiler', error);


    });
  }

  }
