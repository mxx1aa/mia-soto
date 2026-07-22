import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { resourceUrls } from '../../../constants';

@Component({
  selector: 'app-portfolio',
  imports: [], //RouterLinkActive, RouterLink
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
  imageFolder = 'assets/portfolio';
  images = signal<Array<string>>([]);

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getImageFromFolder();
  }

  getImageFromFolder() {
    this.http.get<Array<string>>(resourceUrls.portfolioImageUrl).subscribe({
      next: (value) => {
        this.images.set(value);
        console.log(this.images());
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
