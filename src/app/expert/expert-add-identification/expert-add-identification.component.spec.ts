import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertAddIdentificationComponent } from './expert-add-identification.component';

describe('ExpertAddIdentificationComponent', () => {
  let component: ExpertAddIdentificationComponent;
  let fixture: ComponentFixture<ExpertAddIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertAddIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertAddIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
