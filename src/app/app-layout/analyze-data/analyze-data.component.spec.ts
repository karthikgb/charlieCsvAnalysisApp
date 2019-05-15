import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeDataComponent } from './analyze-data.component';

describe('UserProfileComponent', () => {
  let component: AnalyzeDataComponent;
  let fixture: ComponentFixture<AnalyzeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
