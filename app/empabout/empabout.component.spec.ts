import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaboutComponent } from './empabout.component';

describe('EmpaboutComponent', () => {
  let component: EmpaboutComponent;
  let fixture: ComponentFixture<EmpaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
