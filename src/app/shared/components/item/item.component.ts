import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  addbutton: boolean = false;
  @Input() data: any = {};
  @Output() product = new EventEmitter();
  amount: number = 0;

  constructor() {}

  ngOnInit(): void {}
  getAmount(event: any) {
    let v = +event.target.value;
    this.amount = v;
  }
  add() {
    this.product.emit({
      quentity: this.amount,
      item: this.data,
    });
    this.addbutton = false;
  }
}
