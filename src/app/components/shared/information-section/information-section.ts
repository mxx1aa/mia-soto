import { Component, input } from '@angular/core';
import { Information } from '../../../models/information';

@Component({
  selector: 'app-information-section',
  imports: [],
  templateUrl: './information-section.html',
  styleUrl: './information-section.scss',
})
export class InformationSection {
  information = input<Information>();
}
