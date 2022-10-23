import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductservicesService } from '../../services/productservices.service';

@Component({
  selector: 'app-productsdetalise',
  templateUrl: './productsdetalise.component.html',
  styleUrls: ['./productsdetalise.component.scss'],
})
export class ProductsdetaliseComponent implements OnInit {
  loading: boolean = false;
  saveallData: any = [];
  Product: any = {};
  id: number = 0;
  constructor(
    private prodServices: ProductservicesService,
    private route: ActivatedRoute,
    private url: Router
  ) {
    this.id = +this.route.snapshot.params['id'];
    // this.route.paramMap
    //   .subscribe((id:any) => {
    //     this id = +id.get('id'); // This line converts id from string into num
    //   });
  }

  ngOnInit(): void {
    this.getProductDetalise();
  }

  getProductDetalise() {
    if ('cart ' in localStorage) {
      this.saveallData = JSON.parse(localStorage.getItem('cart')!);
      console.log(JSON.parse(localStorage.getItem('cart')!));
    } else {
      this.prodServices.getAllproducts().subscribe(
        (data) => {
          this.saveallData = data;
          this.Product = this.saveallData[this.id - 1];
          // console.log(this.Product);
        },
        (error) => console.log(error)
      );
    }
  }
}
