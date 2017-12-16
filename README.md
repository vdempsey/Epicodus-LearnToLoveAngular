# Epicodus Learn To Love Angular
by Valia Dempsey
12.05.2017

## Description
This is a personal project for Epicodus. The goal for this week is to discover and improve understanding of a challenging subject of past material. In my case it's Angular JS. I want to create an app that will allow me to create a diary of me falling in love with Angular JS:

Stage One:
1. Build a navigation menu (practice routing): Home, Diary, Resources
2. Display a list of diary entries for Angular JS (use Firebase to store, add and save data)
3. Build a form to add diary entries (when clicked on My Log In tab)
4. Add buttons to edit and remove diary entry (when clicked on My Log In tab)


Resources:
https://www.learnhowtoprogram.com/javascript/angular-extended
https://tutorialzine.com/2013/08/learn-angularjs-5-examples

## Directions to obtain Firebase credentials
1. make a free account at Firebase's website (https://firebase.google.com/)
2. Create a New Project in a user dashboard area. Provide a name for your new project, and select your Country/region from the drop-down menu.
3. Select Add Firebase to your web app in an Overview area.
4.  Create a new file called api-keys.ts in the src/app directory.
5. Place your Firebase credentials (the information Firebase provided in that modal window), like this:

export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };

6. Visit Firebase Console once more, and select project's name from the list.
7. visit the Database area by selecting the Database option from the navbar on the left-hand side.
8. Find a navbar reading Realtime Database. Select the option that reads RULES.
9. Change both the ".read", and ".write" properties here to "true", as seen below, then click Publish:

{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
