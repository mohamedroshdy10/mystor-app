import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from '../../services/productservices.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss'],
})
export class ProductslistComponent implements OnInit {
  addbutton: boolean = false;
  products: any[] = [];
  Cartproducts: any[] = [];
  loading: boolean = false;
  constructor(private prodservices: ProductservicesService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.prodservices.getAllproducts().subscribe(
      (data: any) => {
        this.products = data;
        this.loading = false;
      },
      (erro) => {
        console.log(erro);
        this.loading = false;
      }
    );
  }
  addProductToCart(obj: any) {
    this.loading = true;
    if ('cart' in localStorage) {
      this.Cartproducts = JSON.parse(localStorage.getItem('cart')!);
      let exitsitem = this.Cartproducts.find(
        (ele) => ele.item.id == obj.item.id
      );
      if (!exitsitem) {
        this.Cartproducts.push(obj);
        alert(obj.item.name + ' add Successfully!');
        localStorage.setItem('cart', JSON.stringify(this.Cartproducts));
      } else {
        alert('Product  ' + obj.item.name + ' is added before!');
      }
    } else {
      this.Cartproducts.push(obj);
      alert(obj.item.name + ' add Successfully!');
      localStorage.setItem('cart', JSON.stringify(this.Cartproducts));
    }
    this.loading = false;
  }
}
