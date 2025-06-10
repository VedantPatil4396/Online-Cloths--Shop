import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css']
})

export class AddProductComponentComponent {

  addRecordForm: FormGroup;
  
  supplierEmail!:any;

  constructor(private http: HttpClient,private route:Router) 
  {
    
    this.addRecordForm = new FormGroup({
      productName: new FormControl("", [Validators.required]),
      price: new FormControl("", Validators.pattern('[0-9]*')),
      productQuantity: new FormControl("", [Validators.pattern('[0-9]*')]),
      productBrand:new FormControl("",[Validators.required]),
      productCategory:new FormControl("",[Validators.required]),
      productFor: new FormControl("",[Validators.required]),
      imgPath:new FormControl("")
    });
  }

  handleSubmit() {
    this.supplierEmail= localStorage.getItem("supplierEmail");
    console.log("supplierEmail : ",this.supplierEmail);

    const product = {
      productName: this.addRecordForm.get('productName')?.value,
      price: this.addRecordForm.get('price')?.value,
      productQuantity: this.addRecordForm.get('productQuantity')?.value,
      productFor: this.addRecordForm.get('productFor')?.value,
      productCategory: this.addRecordForm.get('productCategory')?.value,
      productBrand: this.addRecordForm.get('productBrand')?.value,
      imgPath:this.addRecordForm.get('imgPath')?.value
    
    };

    this.http.post(`http://localhost:8080/addProduct/${this.supplierEmail}`, product)
      .subscribe(response => {
        alert('Product added successfully!');
        this.addRecordForm.reset();
        this.route.navigate(['view'])
      }, error => {
        console.error('Error adding product:', error);
        alert('Failed to add product');
      });
    }
  }

