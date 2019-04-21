import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalEvidenceGeneratorSelectorComponent } from './logical-evidence-generator-selector.component';

describe('LogicalEvidenceGeneratorSelectorComponent', () => {
  let component: LogicalEvidenceGeneratorSelectorComponent;
  let fixture: ComponentFixture<LogicalEvidenceGeneratorSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicalEvidenceGeneratorSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicalEvidenceGeneratorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
