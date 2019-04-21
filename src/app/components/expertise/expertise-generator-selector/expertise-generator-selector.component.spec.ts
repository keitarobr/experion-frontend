import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseGeneratorSelectorComponent } from './expertise-generator-selector.component';

describe('ExpertiseGeneratorSelectorComponent', () => {
  let component: ExpertiseGeneratorSelectorComponent;
  let fixture: ComponentFixture<ExpertiseGeneratorSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertiseGeneratorSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertiseGeneratorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
