import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceFindExpertComponent } from './source-find-expert.component';

describe('SourceFindExpertComponent', () => {
  let component: SourceFindExpertComponent;
  let fixture: ComponentFixture<SourceFindExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceFindExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceFindExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
