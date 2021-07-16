# Reddit Nano
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Reddit Nano was built as a final portfolio project for the Codecademy Front-End Developer course.

[![Netlify Status](https://api.netlify.com/api/v1/badges/df76ccad-070c-4728-a475-e1e4eeecebd4/deploy-status)](https://app.netlify.com/sites/redditnano/deploys)

![image](https://user-images.githubusercontent.com/84115199/125889685-b331c2cc-1966-45a0-9bfa-dba0ef7c9316.png)

## Project Requirements
- Build the application using React and Redux
- Version control your application with Git and host the repository on GitHub
- Use a project management tool (GitHub Projects, Trello, etc.) to plan your work
- Write a README (using Markdown) that documents your project including:
  - Wireframes
  - Technologies used
  - Features
  - Future work
- Write unit tests for your components using Jest and Enzyme
- Write end-to-end tests for your application
- Users can use the application on any device (desktop to mobile)
- Users can use the application on any modern browser
- Users can access your application at a URL
- Users see an initial view of the data when first visiting the app
- Users can search the data using terms
- Users can filter the data based on categories that are predefined
- Users are shown a detail view (modal or new page/route) when they select an item
- Users are delighted with a cohesive design system
- Users are delighted with animations and transitions
- Users are able to leave an error state
- Get 90+ scores on [Lighthouse](https://web.dev/measure/)

## Wireframes
The wireframes were made with [wireframe.cc](wireframe.cc) and can be found here:
- [Landing/home page](https://wireframe.cc/s6PL0A)
- [Article view](https://wireframe.cc/UMBOlA)

## Codebase
### Technology
This repo makes use of:
* **React** : Front end library
* **Redux** : For state management
* **Jest** : Testing suite
* **Reddit** : JSON api used
* **Javascript**
* **CSS**
* **HTML**

## Lighthouse Audit Results
 ![image](https://user-images.githubusercontent.com/84115199/125889639-b1b22fc5-05e0-4eca-896a-b6fe968779b7.png)


## File structure
```bash
reddit-nano/
├── public     # Public files used on the frontend
└── src        # Frontend SPA

reddit-nano/src
├───app
│   └───helpers
├───components
│   ├───BackButton
│   ├───comments
│   ├───favorites
│   ├───Loading
│   ├───post
│   └───searchBar
└───features
    ├───listing
    └───listings
```

## Currently in development
WIP List
* Jest & Enzyme for unit and snapshot testing
* Media queries for small screen
* E2E testing with testcafe
* Error landing page for fetch/search failures

## Future development
Some potential features to look into:
* Displaying nested url structure for navigation
* Displaying videos
* Using loading skeletons
* Fix the favorites bar with scroll, possibly using sticky position
* Optimise font sizing for readability
* Investigate source maps
* Reorganise features vs components
