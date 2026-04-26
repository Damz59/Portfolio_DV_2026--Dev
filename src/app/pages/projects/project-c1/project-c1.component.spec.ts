import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectC1Component } from './project-c1.component';

describe('ProjectC1Component', () => {
  let component: ProjectC1Component;
  let fixture: ComponentFixture<ProjectC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectC1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
