import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductslistComponent } from './components/productslist/productslist.component';
import { ProductsdetaliseComponent } from './components/productsdetalise/productsdetalise.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductslistComponent, ProductsdetaliseComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
  ],
})
export class ProductModule {}
