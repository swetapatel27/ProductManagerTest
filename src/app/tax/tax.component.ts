import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  taxes:any[]=[];
  constructor(private _router:Router,private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getTaxes().subscribe(taxes => this.taxes=taxes);
  }
  redirect(){
    this._router.navigateByUrl('dashboard/add-tax');
  }

}
