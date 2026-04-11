import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectA1Component } from './project-a1.component';

describe('ProjectA1Component', () => {
  let component: ProjectA1Component;
  let fixture: ComponentFixture<ProjectA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectA1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
