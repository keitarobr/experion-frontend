import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGeneratorSelectorComponent } from './profile-generator-selector.component';

describe('ProfileGeneratorSelectorComponent', () => {
  let component: ProfileGeneratorSelectorComponent;
  let fixture: ComponentFixture<ProfileGeneratorSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileGeneratorSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGeneratorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
