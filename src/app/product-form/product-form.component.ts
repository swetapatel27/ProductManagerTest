import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: any;
  product: any;
  taxes: any = [];
  submitted = false;
  isEdit = false;

  constructor(private fb: FormBuilder, private _productServices: ProductService, private _router: Router, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this._productServices.getTaxes().subscribe(taxes => this.taxes = taxes);

    this._activatedRoute.params.subscribe(param => {
      if (param['id'] != undefined) {

        //enable edit if parameter is not undefined.
        this._productServices.getProductById(param['id']).subscribe((product) => {

            this.product = product;
            this.isEdit = true;

            this.productForm = this.fb.group({
              id:[this.product.id,Validators.required],
              name: [this.product.name, Validators.required],
              price: [this.product.price, [Validators.required, Validators.pattern("^[0-9]*$")]],
              taxId: [this.product.taxId, [Validators.required],],
            });

          });

      }else{

        //form for adding new product
        this.productForm = this.fb.group({
          id:['',],
          name: ['', Validators.required],
          price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
          taxId: ['', [Validators.required],],
        });

      }
    });



  }

  get productFormControl() {
    return this.productForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.productForm.valid) {
      alert('Form Submitted succesfully!!!');

      if (!this.isEdit) {
        this._productServices.addProduct(this.productForm.value);
      } else {

        this._productServices.updateProduct(this.productForm.value);
        this.isEdit = false;
      }
      this._router.navigateByUrl('dashboard/product');
    }
  }


}
