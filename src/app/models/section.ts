import { Information } from './information';
import { BadgeList } from './badge-list';

export class Section {
  name: string;
  items: (Information | BadgeList)[];
  constructor(name: string, items: (Information | BadgeList)[]) {
    this.name = name;
    this.items = items;
  }
}
