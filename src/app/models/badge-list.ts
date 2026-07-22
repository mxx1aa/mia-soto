import { sectionTypes } from '../constants';
import { Badge } from './badge';

export class BadgeList {
  type: sectionTypes;
  title: string;
  badges: Badge[];
  constructor(type: sectionTypes, title: string, badges: Badge[]) {
    this.type = type;
    this.title = title;
    this.badges = badges;
  }
}
