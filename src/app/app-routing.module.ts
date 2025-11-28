import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { logInGuard } from './guards/log-in.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: "Home - Joe's Robot Shop",
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    title: "Catalog - Joe's Robot Shop",
  },
  {
    path: 'cart',
    component: CartComponent,
    title: "Catalog- Joe's Robot Shop",
    canActivate: [logInGuard],
  },
  {
    path: 'signIn',
    component: SignInComponent,
    title: "SignIn - Joe's Robot Shops",
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
