import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsdetaliseComponent } from './productsdetalise.component';

describe('ProductsdetaliseComponent', () => {
  let component: ProductsdetaliseComponent;
  let fixture: ComponentFixture<ProductsdetaliseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsdetaliseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsdetaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
