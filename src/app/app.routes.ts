import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectA1Component } from './pages/projects/project-a1/project-a1.component';
import { ProjectA2Component } from './pages/projects/project-a2/project-a2.component';
import { ProjectB1Component } from './pages/projects/project-b1/project-b1.component';
import { ProjectB2Component } from './pages/projects/project-b2/project-b2.component';
import { ProjectB3Component } from './pages/projects/project-b3/project-b3.component';
import { ProjectC1Component } from './pages/projects/project-c1/project-c1.component';
import { ProjectC2Component } from './pages/projects/project-c2/project-c2.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: "skills", component: SkillsComponent},
    { path: 'projects/a1', component: ProjectA1Component },
    { path: 'projects/a2', component: ProjectA2Component },
    { path: 'projects/b1', component: ProjectB1Component },
    { path: 'projects/b2', component: ProjectB2Component },
    { path: 'projects/b3', component: ProjectB3Component },
    { path: 'projects/c1', component: ProjectC1Component },
    { path: 'projects/c2', component: ProjectC2Component },
    { path: '**', redirectTo: '' },
];
