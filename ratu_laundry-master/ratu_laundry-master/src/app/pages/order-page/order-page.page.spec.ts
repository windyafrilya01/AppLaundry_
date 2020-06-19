import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderPagePage } from './order-page.page';

describe('OrderPagePage', () => {
  let component: OrderPagePage;
  let fixture: ComponentFixture<OrderPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
