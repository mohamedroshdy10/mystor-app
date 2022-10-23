import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductservicesService {
  constructor(private http: HttpClient) {}

  getAllproducts() {
    return this.http.get('/assets/data.json');
  }
  getOneProduct(id: number) {
    return this.http.get('/assets/data.json/' + id);
  }
}
