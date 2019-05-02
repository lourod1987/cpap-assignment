# cpap-assignment
Building a project to meet requirements and share with team to display and explain my programming work

## Assignment
  Pre-Work Assignment. Use the Google News api for Engadget articles [Engadget API](https://newsapi.org/s/engadget-api) to create a news reader app, but with visual styling like the Technology section at [Flipboard](https://flipboard.com)

·         Article listing page

·         Article page

·         Ability to link to full article content in separate tab

·         Mobile first layout

·         No need for functionality like submitting comments, favorites, etc.

·         Add an extra screen that lists the articles the user has visited and which ones they viewed the full article at the Engadget site

·         Written in React / Redux


## Breakdown

### Article list page:
* Header/Nav
    - Logo/Home Link
    - search by hashtags 
    - sign up
    - get the app
    - log in
* Articles displayed in listed tiles
    - each tile has a publisher logo image with name (links out to author and has all author related stories in tile format as well)
    - each article tile should link to the article's page
    - each tile has a pic
    - each tile has an associated hashtag for what it is related to
    - each tile has a title
    - each tile has publisher and author
    - each tile has a summary (title and description/subtitle combined)
* Read More button (after 30 tiles. Loads additional tiles)
* Footer
    - Links
        - Log In
        - About Us
        - Blog
        - Tools
        - Publishers
        - Help
        - Terms
        - Privacy Policy
        - Sitemap
    - Copyright link on its own (centered)

### Article page:
* Header/Nav again
* Tile again
    - tile elements should link out to full article in new tab
* More stories (a total of 10 suggested)
    - each story has a pic
    - each story has a title
    - each story has a publisher and author
* Button with publisher main level site name
    - links directly to full article of current tile in a new tab
* Brand Message
* Sign Up Now CTA button
* Footer again

### Additional Page:
* Header/Nav again
* lists the articles the user has visited
    - need to keep track of each article title clicked on
* Which articles are viewed in full at the Engadget site
    - need to keep track of when the user clicks on any link to view the full article
* Footer again

* Add objects to an array. Each object takes name property with a string value for the title of the article and a seen property with a boolean value to show whether the page was visited and a visited property with a boolean value to show whether the full article was visited. - **DONE**


## TODO
* Fix and Finish App styling (mobile first) - **DONE**
    - Back to Top Button main page (possibly search page)
    - Back / Close button in article page
* Create Site logo - **DONE**
* Set up dynamic animations for scrolling, hovering, clicking across
* Highlighting for currently selected top article (css border around currently selected) - **DONE**
* Get full list of articles on table of UserInfo page - **DONE**
* stop interval for autoChange onClick and then start again - **DONE**
* Create Search functionality and UI - **DONE**
* Redo file structure - **DONE**
    - fix page link (imports) - **DONE**
* Add in .sass and break apart css into multiple files - **DONE**
* Implement Redux - **DONE**
    - yarn add redux, redux-thunk, react-redux - **DONE**
    - Create Store Folder - **DONE**
        - Create Reducers File - **DONE**
        - Create index.js - **DONE**
    - Create Constants File - **DONE**
    - Create Actions File - **DONE**
    - Create initialState.json - **DONE**
* Refactor
    - Review code: simplify where possible
    - Ensure best practices
    - Apply functional logic throughout Application - **DONE**
    - Clear all errors and warnings
    - Write comments throughout App 
* Rewrite Project/Repo README
* Extras:
    - PropTypes - **DONE**
    - Set dynamic routing up for each article - **PARTIAL**
    - Set up 404 Pages - **DONE**
    - Implement Jest Unit and UI tests
    - lighthouse test performance (see what can be improved)
    - Do Accessibility Audit/Testing (try axe tool in firefox)