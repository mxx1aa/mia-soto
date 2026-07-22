import { sectionTypes } from '../constants';

export class Information {
  type: sectionTypes;
  title: string;
  subtitle: string;
  dateText: string;
  content: string[];
  constructor(
    type: sectionTypes,
    title: string,
    subtitle: string,
    dateText: string,
    content: string[],
  ) {
    this.type = type;
    this.title = title;
    this.subtitle = subtitle;
    this.dateText = dateText;
    this.content = content;
  }
}
