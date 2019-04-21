import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertEvidenceInputComponent } from './expert-evidence-input.component';

describe('ExpertEvidenceInputComponent', () => {
  let component: ExpertEvidenceInputComponent;
  let fixture: ComponentFixture<ExpertEvidenceInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertEvidenceInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertEvidenceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
