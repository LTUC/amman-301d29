# Deploy and Extend Your Portfolio

## Overview

Get ready to take a look at a full-featured code base! [The starter code](https://github.com/codefellows/code-301-react-portfolio-template){:target="_blank"} contains a React + Bootstrap site with a number of example pages, complete with icons, styles, and themed layouts. Your job is to customize this code and make the site your own.

You will be deploying your React portfolio to [Netlify](https://www.netlify.com/){:target="_blank"}.

## Time Estimate

For each of the main features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```md
Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

## Feature #1: Deployment

Deploy the starter code to Netlify.

- You will need to create a new repository to complete this task.
  - Create your repository using [the template repository](https://github.com/codefellows/code-301-react-portfolio-template){:target="_blank"}.
  - You can immediately clone your new repository to your computer, and publish it to Netlify.
- Add the URL to your live, deployed site to your README.

### Feature #2: Modify the contents

#### Why are we implementing this feature?

- As a user, I want to view a unique portfolio so that the skills and personality of the developer are portrayed.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the content should be unique and reflect the skills and personality of the developer.

#### How are we implementing it?

- Modify the contents of the template to make it your own. You may utilize existing JSX elements, but the content should be adapted to reflect your personal details and skills.
- Apply the following changes to the provided Profile example page, some of which were part of your prework for this course:
  - Replace the profile picture with your own.
  - Update the name, location, title, and education rows with your own info.
  - Add a personal headline. This should be the same as or similar to your headline on your LinkedIn profile.
  - Replace the numerical values and labels with something meaningful to you.
- Update the Nav, Header, and Footer:
  - Remove the "Components" dropdown menu.
  - Change the "Examples" menu to be titled simply "Menu".
  - Within the menu link to a Profile page, and a Portfolio page. Remove other links.
  - Change the routes so the Profile page loads at `/`, and the "Landing" page loads at `/portfolio`. Move the initial Index page to load at `/how-to` for your own reference.
  - Fix up the social media icons and their links as you like. At least swap out Facebook for LinkedIn, and ensure you are linking to your GitHub account here. These icons are included via FontAwesome.
  - Remove the "Download" button.
- Redo the "Landing" page as your new Portfolio page:
  - Change the text in the top section to state what you are excited about in tech.
  - Use the Cards to BRIEFLY descbribe your previous projects, and include placeholders for future 301 and 401 projects.
  - Include more detail below on projects you'd like to showcase.
  - Make an All About Me section, add your personal pitch.
  - Delete sections you aren't utilizing.
- Throughout the site, change the content and images to reflect your personal preferences. If you are using online images, make sure they are licensed for free, commercial use. For example, [Unsplash](https://unsplash.com/){:target="_blank"} has a nice variety of free images.
- Keep in mind that this template is just a starting point. It is yours to modify to reflect your personal online presence as a software developer so have fun and be creative!

## Submission Instructions

1. Complete your Feature Tasks for the lab on a branch.
1. Create a PR back to the `main` branch of your repository, and merge it cleanly.
1. Ensure your most recent code deployment was successful, so your latest code is published live via Netlify.
1. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
    - A link to the deployed version of your latest code.
    - A question within the context of today's lab assignment
    - An observation about the lab assignment, or related 'Ah-hah!' moment
    - How long you spent working on this assignment
