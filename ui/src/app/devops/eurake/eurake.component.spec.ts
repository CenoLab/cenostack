import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EurakeComponent } from './eurake.component';

describe('EurakeComponent', () => {
  let component: EurakeComponent;
  let fixture: ComponentFixture<EurakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EurakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EurakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
