import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositCoinsComponent } from './deposit-coins.component';

describe('DepositCoinsComponent', () => {
  let component: DepositCoinsComponent;
  let fixture: ComponentFixture<DepositCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositCoinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
