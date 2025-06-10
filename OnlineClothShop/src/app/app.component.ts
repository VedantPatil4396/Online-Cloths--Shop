import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OnlineClothShop';

  constructor(private rout:Router)
  {
    // localStorage.setItem("custEmail","GUEST")
    // localStorage.setItem("supplierEmail","GUEST")
  }
}
