import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/shared/navbar/navbar';
import { Header } from './components/shared/header/header';
import { Home } from './components/views/home/home';
import { Portfolio } from './components/views/portfolio/portfolio';
import { Projects } from './components/views/projects/projects';
import { Resume } from './components/views/resume/resume';

@Component({
  selector: 'app-root',
  imports: [Navbar, Header, RouterOutlet], // Home, Portfolio, Projects, Resume, add later
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Mia Soto');
}
//
