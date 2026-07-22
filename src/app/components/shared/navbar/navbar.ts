import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLink, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
// import { NgIf } from "../../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink, NgClass], //NgIf
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  isHomePage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage = event.url === '/' || event.url === '/contact';
      });
  }
}
