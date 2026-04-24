import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectB2Component } from './project-b2.component';

describe('ProjectB2Component', () => {
  let component: ProjectB2Component;
  let fixture: ComponentFixture<ProjectB2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectB2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
