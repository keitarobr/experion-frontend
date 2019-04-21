import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseBrowserComponent } from './expertise-browser.component';

describe('ExpertiseBrowserComponent', () => {
  let component: ExpertiseBrowserComponent;
  let fixture: ComponentFixture<ExpertiseBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertiseBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertiseBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
