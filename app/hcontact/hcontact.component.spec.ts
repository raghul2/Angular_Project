import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcontactComponent } from './hcontact.component';

describe('HcontactComponent', () => {
  let component: HcontactComponent;
  let fixture: ComponentFixture<HcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
