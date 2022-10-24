import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ConfiramationComponent } from '../confiramation/confiramation.component';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  isSended: boolean = false;
  order: any = {};
  customerName: string = '';
  constructor() {}
  myform = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[^\\s].*[^\\s]$'),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^[^\\s].*[^\\s]$'),
    ]),
    card: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern('^[^\\s].*[^\\s]$'),
    ]),
  });
  ngOnInit(): void {}
  add() {
    if (this.myform.invalid) return;
    else {
      this.isSended = true;
      //this.url.navigateByUrl('/Confiramation');
      this.customerName = this.myform.value.name!;
    }
    this.myform.reset();
  }
}
