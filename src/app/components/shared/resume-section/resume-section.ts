import { Component, input } from '@angular/core';
import { Section } from '../../../models/section';
import { sectionTypes } from '../../../constants';
import { InformationSection } from '../information-section/information-section';
import { BadgelistSection } from '../badgelist-section/badgelist-section';

@Component({
  selector: 'app-resume-section',
  imports: [InformationSection, BadgelistSection],
  templateUrl: './resume-section.html',
  styleUrl: './resume-section.scss',
})
export class ResumeSection {
  resumeSection = input<Section>();
  readonly sectionTypes = sectionTypes;
}
