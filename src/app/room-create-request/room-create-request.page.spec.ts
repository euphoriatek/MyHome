import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomCreateRequestPage } from './room-create-request.page';

describe('RoomCreateRequestPage', () => {
  let component: RoomCreateRequestPage;
  let fixture: ComponentFixture<RoomCreateRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCreateRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomCreateRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
