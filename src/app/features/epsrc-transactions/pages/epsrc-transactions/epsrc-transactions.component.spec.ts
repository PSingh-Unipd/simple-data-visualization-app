import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsrcTransactionsComponent } from './epsrc-transactions.component';

describe('EpsrcTransactionsComponent', () => {
  let component: EpsrcTransactionsComponent;
  let fixture: ComponentFixture<EpsrcTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpsrcTransactionsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpsrcTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
