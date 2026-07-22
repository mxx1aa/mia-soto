import { Component, input } from '@angular/core';
import { Badge } from '../../../models/badge';

@Component({
  selector: 'app-badgelist-section',
  imports: [],
  templateUrl: './badgelist-section.html',
  styleUrl: './badgelist-section.scss',
})
export class BadgelistSection {
  badgeList = input<Badge[]>();
}
