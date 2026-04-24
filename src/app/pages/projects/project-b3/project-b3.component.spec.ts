import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectB3Component } from './project-b3.component';

describe('ProjectB3Component', () => {
  let component: ProjectB3Component;
  let fixture: ComponentFixture<ProjectB3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectB3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectB3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
