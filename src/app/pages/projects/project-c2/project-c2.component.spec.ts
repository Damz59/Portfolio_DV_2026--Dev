import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectC2Component } from './project-c2.component';

describe('ProjectC2Component', () => {
  let component: ProjectC2Component;
  let fixture: ComponentFixture<ProjectC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectC2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
