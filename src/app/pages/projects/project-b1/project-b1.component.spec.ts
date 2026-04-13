import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectB1Component } from './project-b1.component';

describe('ProjectB1Component', () => {
  let component: ProjectB1Component;
  let fixture: ComponentFixture<ProjectB1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectB1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
