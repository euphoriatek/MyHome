import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomsSubdropdownPage } from './rooms-subdropdown.page';

describe('RoomsSubdropdownPage', () => {
  let component: RoomsSubdropdownPage;
  let fixture: ComponentFixture<RoomsSubdropdownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsSubdropdownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomsSubdropdownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
