import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-tax-form',
  templateUrl: './tax-form.component.html',
  styleUrls: ['./tax-form.component.css']
})
export class TaxFormComponent implements OnInit {

  taxForm: any;
  submitted = false;
  constructor(private fb: FormBuilder, private _productServices: ProductService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.taxForm = this.fb.group({
      id:['',],
      name: ['', Validators.required],
      rate: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  get taxFormControl() {
    return this.taxForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.taxForm.valid) {
      alert('Form Submitted succesfully!!!');
      console.table(this.taxForm.value);
      this._productServices.addTax(this.taxForm.value);
      this._router.navigateByUrl('dashboard/tax');
    }
  }


}
