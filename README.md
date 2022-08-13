# Rootine - Team Status 418

## 🌱 _Plant the seeds of good habits_ 🌱

<br>

> ### “Sure, it’s easy to _start_ a new habit, but how do you make it stick?”
<br>

[Open app](https://rootine.netlify.app "Rootine deployed on Netlify")
<br>

TODO: Adjust tone <<<<<<<<<<<<<

As our final project for School of Code, our team, _Status 418_, made "Rootine", a habit-tracking app developed in React. The purpose of this app is to allow users to define some daily habits that they would like to start (or keep) and be able to easily fill in and track their record of doing these habits over time. This app enables users to simply add a new habit along with a brief description and have this stored on our database. The user may then login in and open the page at a different time and update their progress for any day. 

A user can expect to logout and login on a different device and still be able to view their same habits and corresponding records for each date, all on that new device !

This repository contains the frontend code for the app, which has several features:

-   Landing page with an Auth0-integrated Log in/ Sign up flow
-   Calender row display with clickable arrows to see a different week
-   Details panel displaying the details of the currently selected habit
    +   Details of the currently selected habit may be edited through here as well
-   Form through which a new habit may be created, shown by clicking the "add +" button
-   A row of clickable items for each habit, indicating the status of the user's habit for that day - incomplete, complete, skipped or missed

## CSS Styling
![#f03c15](https://via.placeholder.com/15/f03c15/f03c15.png) `#f03c15`
---
https://via.placeholder.com/15/f8a642/f8a642.png

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

![Landing page screenshot](/../main/rootine/screenshots/LandingPage.JPG)

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
TODO: Paragraph about the main page goes here <<<<<<<<<<<<<<<<<

<details>
<summary>Main page preview</summary>

![Main page screenshot](/rootine/screenshots/MainPage.JPG)

</details>
<br>

### Calendar bar
This shows 1 weeks' worth of dates, where each date box is synchronised with a column of "habit items" for that date. Future and previous weeks are able to be viewed by clicking on the arrows to the left and right of this row, with the habit items below updating for the status of each habit for the newly displayed days.

<details>
<summary>Calendar bar preview</summary>

![Calendar bar screenshot](rootine/screenshots/CalendarBar.JPG)

</details>


