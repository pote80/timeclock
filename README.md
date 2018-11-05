<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

This project is designed to give you an opportunity to practice building a full stack application. We will only provide you with design specifications and technical requirements; the exact steps you will take are up to you. 

Good luck and work hard!

# Expectations 
This is similar to the simulations given to you in your cohort, but larger in scale. We are asking you to build a much more robust project that will strech your skills and hopefully help you build your understanding. You will have 3 weeks to build this project. We expect you to solve as many problems and bugs as you can on your own. You will learn much more if you push yourself to understand what the code you're writing is doing. Your mentor is always willing to help, but once you leave DevMountain it will be on you to contine your learning and solve problems, so it's good to strike out on your own as much as possible.

After the 3 weeks are over a mentor will look over your code and you will be expected to walk them through how different parts are working. Use this as an opportunity to practice talking about code, as well as to learn about the parts that you are not sure about. The mentor will push you to explain as much as they can in an attempt to find holes in your understanding. This way we can better teach you and get you ready for the job market.

If you have any questions about any of the expectation for this simulation or your time in Async feel free to reach out to a mentor or instructor and we will be happy to answer them.

# Style Guide

<b>Logo available in the `assets` folder of this repo.</b>

<img src="https://github.com/bethtelford/simulation-timeclock/blob/master/assets/style_guide.png" />

<b><a href="https://fonts.google.com/specimen/Cinzel">Google Font - Cinzel</a></b>
<br/>
<b><a href="https://fonts.google.com/specimen/Oswald">Google Font - Oswald</a></b>

# Application Design

## Homepage

<img src="https://github.com/bethtelford/simulation-timeclock/blob/master/views/home.png" />

## New Time-Punch

<img src="https://github.com/bethtelford/simulation-timeclock/blob/master/views/new.png" />
<br />
<img src="https://github.com/bethtelford/simulation-timeclock/blob/master/views/new_p2.png" />

## Edit Time-Punch

<img src="https://github.com/bethtelford/simulation-timeclock/blob/master/views/edit.png" />

# Technical Requirements - Front-end

## Header
* The header should be created as its own componenet.
* The header component should be rendered only once.
  * This can be accomplished by rendering it outside of the routes.
* Clicking on the logo should navigate the user to the homepage.

## Homepage
* User can see all of their time-punches.
  * They should display in correct chronological order.
  * The front-end should call the back-end for the list of punches.
  * Time-punches should be displayed with a reusable component.
* Each time-punch should display whether it was in or out, the date, the day of the week, and the time.
* Each time-punch should have an `Edit` and a `Delete` button.
  * The `Edit` button should navigate the user to the `Edit Punch` view.
  * The `Delete` button should remove the punch from the database and re-render the list of punches without the recently removed punch.
* User can click on the `New Punch` button to navigate to the `New Punch` view.

## New Punch
* User can enter the date of their time-punch.
* User can select the day of their time-punch from a dropdown.
* User can enter the time of their time-punch.
  * The time should be entered using three inputs.
  * The input for hours should be an input box.
  * The input for minutes should be an input box.
  * The input for AM/PM should be a dropdown.
* User can select the type (in or out) of their time-punch from a dropdown.
* User can click the `Create Punch` button to save their new punch.
  * This should store the punch information in the database. 
  * This should navigate the user back to the homepage.
  * The user should see their new punch in the list of punches on the homepage.
* User can click the `Cancel` button to navigate back to the homepage without saving the time-punch.

## Edit Punch
* This route should use a parameter to identify which time-punch is being edited.
* User can see all existing time-punch information
  * The data should be automatically entered into the appropriate fields when the page loads. 
  * The front-end should call the back-end for the punch data.
* User can update the date, day, time, and type information.
* User can click the `Save Punch` to save the current punch.
  * This should store the updated information in the database.
  * This should navigate the user back to the homepage.
  * The user should see the updated information for the punch they just edited in the list.
* User can click the `Cancel` button to reset all inputs back to the original values of the time-punch.

# Technical Requirements - Back-end

* The back-end should be created using express. 
* Massive should be used to establish a connection to your database.

## Endpoints
Note: These are suggested endpoints. If you would like to structure your server differently, feel free to do so.

* Homepage
  * GET - `/api/punches`
    * Returns an array of all punch objects.
    * Array should be in correct chronological order (Hint: Here is a <a href='http://www.postgresqltutorial.com/postgresql-order-by/'>tutorial</a> on using the `ORDER BY` Postgres clause to sort a selection by multiple columns).
  * DELETE - `/api/punch/:id`
    * Removes a time-punch from the database.
    * Returns the updated array of all punch objects (also in chronological order).
    * `:id` is the id of the punch to be deleted.
* New Punch
  * POST - `/api/punch`
    * Creates a new time-punch.
    * Returns nothing.
* Edit Punch
  * GET - `/api/punch/:id`
    * Returns a time-punch object.
    * `:id` is the id of the punch that is returned.
  * PUT - `/api/punch/:id`
    * Updates a time-punch in the database.
    * Returns nothing.
    * `:id` is the id of the punch to be updated.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>