import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [NavbarComponent, ItemComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [NavbarComponent, ItemComponent, SpinnerComponent],
})
export class SharedModule {}
