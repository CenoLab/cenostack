import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContainerComponent } from './new-container.component';

describe('NewContainerComponent', () => {
  let component: NewContainerComponent;
  let fixture: ComponentFixture<NewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
