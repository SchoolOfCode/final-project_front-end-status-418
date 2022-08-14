# Rootine - Team Status 418

### 🌱 _Plant the seeds of good habits_ 🌱

> ### “Sure, it’s easy to _start_ a new habit, but how do you make it stick?”

## Overview
TODO: Adjust tone <<<<<<<<<<<<<

[Open app](https://rootine.netlify.app "Rootine deployed on Netlify")
<br>

As our final project for School of Code, our team, _Status 418_, made "Rootine", a habit-tracking app developed in React. The purpose of this app is to allow users to define some daily habits that they would like to start (or keep) and be able to easily fill in and track their record of doing these habits over time. This app enables users to simply add a new habit along with a brief description and have this stored on our database. The user may then login in and open the page at a different time and update their progress for any day. 

A user can expect to logout and login on a different device and still be able to view their same habits and corresponding records for each date, all on that new device !

This repository contains the frontend code for the app, which has several features:

-   Landing page with an Auth0-integrated Log in/ Sign up flow
-   Calender row display with clickable arrows to see a different week
-   Details panel displaying the details of the currently selected habit
    +   Details of the currently selected habit may be edited through here as well
-   Form through which a new habit may be created, shown by clicking the "add +" button
-   A row of clickable items for each habit, indicating the status of the user's habit for that day - incomplete, complete, skipped or missed
<br>
<br>

## CSS Styling


| Color                              | Hex                                                              |
| ---------------------------------- | ---------------------------------------------------------------- |
| Gradient Red                       | ![#f05d4d](https://via.placeholder.com/15/f05d4d/f05d4d.png) #f05d4d |
| Gradient Yellow                    | ![#f8a642](https://via.placeholder.com/15/f8a642/f8a642.png) #f8a642 |
| Primary Green                      | ![#22553f](https://via.placeholder.com/15/22553f/22553f.png) #22553f |
| Primary Background                 | ![#ffffff](https://via.placeholder.com/15/ffffff/ffffff.png) #ffffff |
| Secondary Background (Auth0 login) | ![#e8e9e3](https://via.placeholder.com/15/e8e9e3/e8e9e3.png) #e8e9e3 |
| Primary Black (Text colour)        | ![#121714](https://via.placeholder.com/15/121714/121714.png) #121714 |

TODO: Add fonts list/ table <<<<<<<<

<br>

## Landing & Log in/ sign up pages

Upon first opening the app, the user is greeted by the screen below - a simple image, the app's slogan, as well as the login and sign up buttons.

<details>
<summary>Landing page preview</summary>

![Landing page screenshot](/rootine/screenshots/LandingPage.JPG)
</details>
<br>

Clicking on either of these buttons redirects the user to an Auth0 authentication page,
where they may sign up for a new account (with any email, even a fake one), or login with an existing account, respectively.

<details>
<summary>Sign up & Log in pages preview</summary>

![Sign up page screenshot](/rootine/screenshots/SignupPage.JPG)
Clicking the _sign up_ button takes the user to this page
<br>

![Log in page screenshot](/rootine/screenshots/LoginPage.JPG)
Clicking the _log in_ button takes the user to this (slightly different) page
</details>

<br>

## Main page
Upon signing up, the user is presented with this page. There are no habits currently added (since they only just signed up), but there is a section on the left, prompting the user to add a new habit as well as an "add" button which the user may click on to access the form view of that section. It is through this form that new habits are defined and submitted. 
<details>
<summary>Main page preview</summary>

![Main page screenshot](/rootine/screenshots/MainPage.JPG)
</details>
<br>

### Habit Form:
The form view of the left section has a "Habit name" input, where the user can define the name of their new habit, as well as a "Habit description" input where a note may be made, giving more detail about that particular habit. Pressing the submit button will add this habit and its description to a database, and associate with the user's account. 

<details>
<summary>Habit form preview</summary>

![Habit form screenshot](rootine/screenshots/HabitForm.JPG)
</details>
<br>

### Calendar bar
This shows 1 weeks' worth of dates, where each date box is synchronised with a column of "habit items" for that date. Future and previous weeks are able to be viewed by clicking on the arrows to the left and right of this row, with the habit items below updating for the status of each habit for the newly displayed days.

<details>
<summary>Calendar bar preview</summary>

![Calendar bar screenshot](rootine/screenshots/CalendarBar.JPG)
</details>
<br>

### Habit rows:
TODO: <<<<<<<<<<<<<<

Description of functionality and usage of habit row component

<details>
<summary>Habit row preview</summary>

![Habit row screenshot](rootine/screenshots/HabitRow.JPG)
</details>
<br>

### Details panel:
TODO: <<<<<<<<<<<<<<

Description of functionality and usage of details panel component

<details>
<summary>Detail panel preview</summary>

![Detail panel screenshot](rootine/screenshots/DetailsPanel.JPG)
</details>
<br>


















<br>

## Languages and Tools

<br>

 <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> 
 <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
 <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
 <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
 <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
 <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> 
 <a href="https://www.cypress.io" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" alt="cypress" width="40" height="40"/> </a> 
 <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> 

