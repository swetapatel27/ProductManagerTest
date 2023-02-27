import { Pipe, PipeTransform } from '@angular/core';
import {ProductService} from './services/product.service';

@Pipe({
  name: 'taxnames'
})
export class TaxnamesPipe implements PipeTransform {


  transform(taxIds: any[], taxes: any[]): any[] {

    let taxNames:any = [];
    taxIds.forEach(item=>{
      const obj = taxes.find(tax=>tax.id === item);
      taxNames.push(obj.name);
    })

    return taxNames;


  }

}
