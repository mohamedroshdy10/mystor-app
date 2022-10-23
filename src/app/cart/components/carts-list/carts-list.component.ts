import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts-list',
  templateUrl: './carts-list.component.html',
  styleUrls: ['./carts-list.component.scss'],
})
export class CartsListComponent implements OnInit {
  cartProducts: any[] = [];
  totlePrice: any = 0;
  success: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.getSallaCarts();
  }

  getSallaCarts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      this.calcTotalPrcie();
    }
  }
  calcTotalPrcie() {
    for (let item of this.cartProducts) {
      this.totlePrice += item.item.price * item.quentity;
    }
  }
  addAmount(index: number) {
    this.cartProducts[index].quentity++;
    this.calcTotalPrcie();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  minAmount(index: number) {
    if (this.cartProducts[index].quentity == 0) return;
    this.cartProducts[index].quentity--;
    this.calcTotalPrcie();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  DeleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.calcTotalPrcie();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    if (this.cartProducts.length === 0) {
      this.totlePrice = 0;
      this.ClearData();
    }
  }
  DetectCahnge() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.calcTotalPrcie();
  }

  ClearData() {
    this.cartProducts = [];
    this.totlePrice = 0;
    this.calcTotalPrcie();
    localStorage.removeItem('cart');
  }
}
