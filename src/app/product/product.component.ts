import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  taxes:any[]=[];

  constructor(private _router:Router,private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(products => this.products = products);
    this._productService.getTaxes().subscribe(taxes => this.taxes=taxes);
  }
  redirect(){
    this._router.navigateByUrl('dashboard/add-product');
  }
  edit(id:any){
    this._router.navigate(['dashboard/add-product',id]);
  }


}
