import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectA1Component } from './pages/projects/project-a1/project-a1.component';
import { ProjectB1Component } from './pages/projects/project-b1/project-b1.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: "skills", component: SkillsComponent},
    { path: 'projects/a1', component: ProjectA1Component },
    { path: 'projects/b1', component: ProjectB1Component },
    { path: '**', redirectTo: '' },
];
