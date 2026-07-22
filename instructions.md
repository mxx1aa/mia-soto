## Transition your static website to Angular. This site construction will teach you the fundamentals of web development.

## Objective:

- Build a responsive website that includes at least 2 pages/components.

- Get familiar with the Angular CLI in building out components

- Utilize Angular routing to navigate between pages

- One page will be the title page with links to your resume and to any other pages you think might be useful (LinkedIn, GitHub, etc)

- One page will include your resume. Be creative with the layout. You should get a good grasp of the DOM and CSS through this process

- (optional) Another page could be a portfolio of your artwork or anything else that you would like to show off.

- Use Custom SCSS to help style your resume

- Shared components:

  - Shared nav

  - Any reusable element

## Outcomes:

- Clear understanding of HTML structure and semantics

- Angular framework understanding

- An understanding of CSS styling and clean/readable layouts

## Specific points from Ryan:

- Navigation: for your navigation, I'd like to see you use routerLinkActive to control which page is recognized as the active page
- Include an assets folder for your portfolio src/assets/portfolio that includes all of your artwork and a JSON file that ats as a manifest art.json for all of the portfolio inclusions. Use http requests to pull the manifest to populate the portfolio page.

## Shared Components instructions

1. Move header out of navbar into its own shared component
2. Resume: Remove all content from the HTML
3. Load in the `assets/content/resume.json` file and leverage the data within to load your resume page.
4. In `resume.ts`, parse the content in the json file and use the name of each section as the section-title, then loop through the items for that to render the content within as a reusable component.
   For example, for the following section, "Work Experience" should be injected into the section heading and the "items" should be looped through and properties should be pushed through to an "information" component or equivalent.

```json
{
  "name": "Work Experience",
  "items": [
    {
      "type": "information",
      "title": "In-N-Out Burger",
      "subtitle": "Software Engineering Intern",
      "dateText": "Summer 2026",
      "content": [
        "As a temp-intern at In N Out Burger... TBD :)"
      ]
    },
    {
      "type": "information",
      "title": "Tillys",
      "subtitle": "Seasonal Sales Associate",
      "dateText": "Winter 2025-2026 | Summer 2025",
      "content": [
        "As a seasonal sales associate, I worked during the busiest times of the year. In my short amount of time at Tillys, I built strong relationships with my coworkers and managers. I handled cash and card transactions, helped guests find what they were searching for, and assisted guests with fitting rooms and shoes. I strengthened my teamwork and communication skills as we always had to assist each other on the sales floor. I learned the importance of clear communication and gained important customer service skills."
      ]
    }
  ]
},
```

The rendered result should be something like:

```html
<app-resume>
  <section ...>
    <app-information ...></app-information>
    <app-information ...></app-information>
  </section>
</app-resume>
```

5. Note that in the Skills section, I made the "Languages | Frameworks" item have a type of "badge-list". I would like you to dynamically fill the list based on the items using a @for(...) loop in the html and use the name of the item to pull the appropriate badge.

## Future enhancement ideas

### Portfolio features

1. Make the .grid-item tag a component that accepts an image URL, description, order/sequence as properties.

```html
<div class="image-grid">
  @for(image of images(); track $index) {
  <div class="grid-item"><img src="/assets/portfolio/{{image}}" /></div>
  }
</div>
```

2. Add functionality for a lightbox, where if the .grid-item is clicked, then it should display in a larger view/modal. Ensure that there is a way to exit the lightbox (esc button, 'x' button positioned in top right, clicking outside of modal)

-

```json
{
  "filename": "denjicolor.jpg",
  "sequence": 3,
  "description": "it's denji"
}
```
