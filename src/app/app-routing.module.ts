import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './cart/components/add-order/add-order.component';
import { CartsListComponent } from './cart/components/carts-list/carts-list.component';
import { ConfiramationComponent } from './cart/components/confiramation/confiramation.component';
import { ProductsdetaliseComponent } from './product/components/productsdetalise/productsdetalise.component';
import { ProductslistComponent } from './product/components/productslist/productslist.component';

const routes: Routes = [
  { path: '', component: ProductslistComponent },
  { path: 'productDetalise/:id', component: ProductsdetaliseComponent },
  { path: 'products', component: ProductslistComponent },
  { path: 'carts', component: CartsListComponent },
  { path: 'addorder', component: AddOrderComponent },
  { path: 'Confiramation', component: ConfiramationComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'products' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
