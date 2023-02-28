import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  taxes = [
    { id: 1, name: 'Sales Tax', rate: 10 },
    { id: 2, name: 'Service Tax', rate: 5 },
    { id: 3, name: 'Value Added Tax', rate: 12 }
  ];

  products = [
    { id: 1, name: 'Product A', price: 100, taxId: [1,2,3]},
    { id: 2, name: 'Product B', price: 50, taxId: [2] },
    { id: 3, name: 'Product C', price: 200, taxId: [3] },
    { id: 4, name: 'Product D', price: 75, taxId: [1] }
  ];

  constructor() { }

  getProducts(): Observable<any> {
    return of(this.products);
  }

  getProductById(id:number): Observable<any> {
    const product = this.products.find((product:any)=>{
      if(product.id == id){
        return product;
      }
    })

    return of(product);
  }

  getTaxes():Observable<any>{
    return of(this.taxes);
  }

  addProduct(product: any):void{
    product.id = this.products.length + 1;

    this.products.push(product);
  }

  addTax(tax:any):void{
    tax.id = this.taxes.length +1;
    this.taxes.push(tax);
  }

  updateProduct(newProduct:any){
    this.products.find((p:any)=>{
      if(p.id == newProduct.id){
        p.name = newProduct.name;
        p.price = newProduct.price;
        p.taxId = newProduct.taxId;
      }
    })

  }
}
