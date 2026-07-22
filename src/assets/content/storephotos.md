# Prompt

Write up your experrience with the store photos versioning feature and include the approach, tools and technologies used, languages learned/levereaged, etc.

# Answer

### Approach

This project was my first time working in a code environment that had already existed. In order to fully implement a new feature, I needed to understand each file and reference. I spent time tracking each reference and familiarizing myself with the codebase.
This new feature required changes in the API and frontend.

I got to experience working locally, then in a test environment, and finally seeing the feature go into production.

### Tools & Technologies

I used Figma to vizualize the flow of data and requests for the feature.
I used Visual Studio Code to work on the Angular frontend portion of this project. I used Visual Studio to make changes to the API. I also used Jira to keep track of my tasks and process, and used GitHub to create pull requests and send my code to be reviewed by peers.

### Languages

I used HTML, TypeScript, and SCSS to develop the frontend, and used C# to make updates to the API.

### Architecture

When working on this feature, I tackled various issues with many different methods.

Shared components are used throughout the codebase, so I ensured my code supported them.

Angular signals to assign results from the API to a signal, then populated a select element with options based on versions available for the PDF record.

I used RxJS mapping to sort PDF titles by date, making searching for versions much easier.

For each new function added, I applied error handling for situations. For example, there are cases where normalized data isn't present, so these results need to be excluded..

Followed an MVC structure: The API receives requests from the frontend, and grabs PDF data from the database.
Shared components, angular signals, rxjs, error handling, MVC structure, .Net Core API, SPA, databinding (the date version flow from db through api to front end)
