import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AsideComponent} from './aside/aside.component';
import {ProductComponent} from './product/product.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {TaxnamesPipe} from './taxnames.pipe';
import {TaxComponent} from './tax/tax.component';
import {TaxFormComponent} from './tax-form/tax-form.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    AsideComponent,
    ProductComponent,
    ProductFormComponent,
    TaxnamesPipe,
    TaxComponent,
    TaxFormComponent,
    LoginComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
