import { Routes } from '@angular/router';
import { Resume } from './components/views/resume/resume';
import { Home } from './components/views/home/home';
import { Portfolio } from './components/views/portfolio/portfolio';
import { Projects } from './components/views/projects/projects';
import { Contact } from './components/views/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'resume',
    component: Resume,
  },
  {
    path: 'portfolio',
    component: Portfolio,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'contact',
    component: Contact,
  },
];
//follow guide :) https://angular.dev/guide/routing/define-routes
