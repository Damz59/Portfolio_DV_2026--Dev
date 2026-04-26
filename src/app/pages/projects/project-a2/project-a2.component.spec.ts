import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectA2Component } from './project-a2.component';

describe('ProjectA2Component', () => {
  let component: ProjectA2Component;
  let fixture: ComponentFixture<ProjectA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectA2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
