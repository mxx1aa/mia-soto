import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLink], //NgIf
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
