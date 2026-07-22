import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs';
import { Information } from '../../../models/information';
import { BadgeList } from '../../../models/badge-list';
import { Section } from '../../../models/section';
import { resourceUrls, sectionTypes } from '../../../constants';
import { Badge } from '../../../models/badge';
import { ResumeSection } from '../../shared/resume-section/resume-section';

@Component({
  selector: 'app-resume',
  imports: [ResumeSection], //RouterLinkActive, RouterLink
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume implements OnInit {
  readonly sectionTypes = sectionTypes;
  x = 'assets/content';
  resumeSections = signal<Section[]>([]);

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getResumeContent();
  }

  getResumeContent(): void {
    let sections: Section[] = [];
    this.http
      .get<any>(resourceUrls.resumeJsonUrl)
      .pipe(
        finalize(() => {
          this.resumeSections.set(sections);
        }),
      )
      .subscribe({
        next: (data) => {
          data.sections.forEach((sec: any) => {
            let items: (Information | BadgeList)[] = [];
            sec.items.forEach((item: any) => {
              const itemType = item.type ?? sectionTypes[sectionTypes.information];
              if (itemType === sectionTypes[sectionTypes.information]) {
                items.push(
                  new Information(
                    sectionTypes.information,
                    item.title ?? '',
                    item.subtitle ?? '',
                    item.dateText ?? '',
                    item.content ?? [],
                  ),
                );
              } else if (itemType === sectionTypes[sectionTypes.badgeList]) {
                let badges: Badge[] = [];
                item.badges?.forEach((badge: string) => {
                  badges.push(new Badge(badge, `/assets/logos/${badge.toLowerCase()}-logo.png`));
                });
                items.push(new BadgeList(sectionTypes.badgeList, item.title ?? '', badges ?? []));
              }
            });
            sections.push(new Section(sec.name, items));
          });
        },
      });
  }
}
