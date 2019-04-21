import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertGenerateLogicalEvidenceComponent } from './expert-generate-logical-evidence.component';

describe('ExpertGenerateLogicalEvidenceComponent', () => {
  let component: ExpertGenerateLogicalEvidenceComponent;
  let fixture: ComponentFixture<ExpertGenerateLogicalEvidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertGenerateLogicalEvidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertGenerateLogicalEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
