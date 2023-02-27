import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: any;
  isSubmitted = false;
  errorMsg = "";

  constructor(private _router: Router, private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() {
    return this.logInForm.controls;
  }

  onSubmit(): void {
     this.isSubmitted = true;
    if (this.logInForm.invalid) {
      return;
    } else if (this.logInForm.value['username'] == "admin" && this.logInForm.value['password'] == "admin") {
      localStorage.setItem("user", this.logInForm.value['username']);
      localStorage.setItem("token", "secret_key");
      this._router.navigateByUrl('dashboard/product');
    }
    else{
     this.errorMsg  = "Please enter correct username and password.";
    }

  }

}
