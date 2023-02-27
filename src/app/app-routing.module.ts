import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductComponent} from "./product/product.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {TaxComponent} from "./tax/tax.component";
import {TaxFormComponent} from "./tax-form/tax-form.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth/auth.guard";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard],
    children: [
      {path: 'product', component: ProductComponent},
      {path: 'add-product/:id', component: ProductFormComponent},
      {path: 'add-product', component: ProductFormComponent},
      {path: 'tax', component: TaxComponent},
      {path: 'add-tax', component: TaxFormComponent},

    ]
  },
  {path: 'login', component: LoginComponent},
  { path: '',   redirectTo: '/dashboard/product', pathMatch: 'full' },
  {path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
