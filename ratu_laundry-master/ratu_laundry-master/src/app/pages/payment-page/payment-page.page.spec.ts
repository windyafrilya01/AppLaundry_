import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentPagePage } from './payment-page.page';

describe('PaymentPagePage', () => {
  let component: PaymentPagePage;
  let fixture: ComponentFixture<PaymentPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
