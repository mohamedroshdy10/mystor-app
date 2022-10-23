import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsListComponent } from './components/carts-list/carts-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { RouterLink } from '@angular/router';
import { ConfiramationComponent } from './components/confiramation/confiramation.component';

@NgModule({
  declarations: [CartsListComponent, AddOrderComponent, ConfiramationComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
})
export class CartModule {}
