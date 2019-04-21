import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectorMultipleComponent } from './input-selector-multiple.component';

describe('InputSelectorMultipleComponent', () => {
  let component: InputSelectorMultipleComponent;
  let fixture: ComponentFixture<InputSelectorMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSelectorMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectorMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
