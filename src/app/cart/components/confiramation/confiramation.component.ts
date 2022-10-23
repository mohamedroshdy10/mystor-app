import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confiramation',
  templateUrl: './confiramation.component.html',
  styleUrls: ['./confiramation.component.scss'],
})
export class ConfiramationComponent implements OnInit {
  @Input() customerName: any;

  constructor() {}

  ngOnInit(): void {}
}
