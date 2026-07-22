import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgelistSection } from './badgelist-section';

describe('BadgelistSection', () => {
  let component: BadgelistSection;
  let fixture: ComponentFixture<BadgelistSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgelistSection],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgelistSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
