import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  redirectPro() {
    this._router.navigateByUrl('dashboard/product');
  }

  redirecttax() {
    this._router.navigateByUrl('dashboard/tax');
  }

  logOut(){
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this._router.navigateByUrl("login");

  }

}
