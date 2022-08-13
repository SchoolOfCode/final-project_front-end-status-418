# Rootine

## 🌱 _Plant the seeds of good habits_ 🌱

<br>

### "_The best time to start a habit was a year ago; the next best time is today_"
<br>

[Open app](https://rootine.netlify.app "Rootine deployed on Netlify")
<br>

TODO: Adjust tone <<<<<<<<<<<<<

Our SOC final project, Rootine, is a habit-tracking app that we developed in React. This repository contains the frontend code for the app, which has several features:

-   Landing page with an Auth0-integrated Log in/ Sign up flow
-   Calender row display with clickable arrows to see a different week
-   Details panel displaying the details of the currently selected habit
    -   Details of the currently selected habit may be edited through here as well
-   Form through which a new habit may be created, shown by clicking the "add +" button
-   A row of clickable items for each habit, indicating the status of the user's habit for that day - incomplete, complete, skipped or missed

## CSS Styling

---

| Color                              | Hex                                                              |
| ---------------------------------- | ---------------------------------------------------------------- |
| Gradient Red                       | ![#f05d4d](https://via.placeholder.com/10/f05d4d?text=+) #f05d4d |
| Gradient Yellow                    | ![#f8a642](https://via.placeholder.com/10/f8a642?text=+) #f8a642 |
| Primary Green                      | ![#22553f](https://via.placeholder.com/10/22553f?text=+) #22553f |
| Primary Background                 | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |
| Secondary Background (Auth0 login) | ![#e8e9e3](https://via.placeholder.com/10/e8e9e3?text=+) #e8e9e3 |
| Primary Black (Text colour)        | ![#121714](https://via.placeholder.com/10/121714?text=+) #121714 |

TODO: Add fonts list/ table <<<<<<<<

<br>

## Landing & Log in/ sign up pages

Upon first opening the app, the user is greeted by the screen below - a simple image, the app's slogan, as well as the login and sign up buttons.

<details>
<summary>Landing page preview</summary>

![Login page screenshot](/screenshots/LandingPage.jpg)

</details>
<br>

Clicking on either of these buttons redirects the user to an Auth0 authentication page,
where they may sign up for a new account (with any email, even a fake one), or login with an existing account, respectively.

<details>
<summary>Sign up & Log in pages preview</summary>

![Sign up page screenshot](/screenshots/SignupPage.jpg)
Clicking the _sign up_ button takes the user to this page

<br>

![Log in page screenshot](/screenshots/LoginPage.jpg)
Clicking the _log in_ button takes the user to this (slightly different) page

</details>

<br>

## Main page
TODO: Paragraph about the main page goes here <<<<<<<<<<<<<<<<<

<details>
<summary>Main page preview</summary>

![Main page screenshot](/screenshots/MainPage.jpg)

</details>
<br>

### Calendar bar
This shows 1 weeks' worth of dates, where each date box is synchronised with a column of "habit items" for that date. Future and previous weeks are able to be viewed by clicking on the arrows to the left and right of the row, and the habit items below will indicate the status of each habit for each day.

<details>
<summary>Calendar bar preview</summary>

![Calendar bar screenshot](/screenshots/CalendarBar.jpg)

</details>