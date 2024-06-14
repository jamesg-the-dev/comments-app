# Comment Application

## Overview

This app allows a user to add, remove, reply, vote and edit a comment (however I didn't have enough time to implement the edit feature). It has a lightweight server running in node and is hooked up to an sqlite database.

## Prerequisites

- node v20.13.1

## Note

I'm not expecting a review for the nodeJS part as it wasn't part of the discussion I had with Sean. However, I thought it would be a good way to display how I might create a full application and integrate APIs using angular.

## Showcase

To run the app, follow these steps:

- run `npm install` in the root directory (this is for the frontend)
- cd into `server` directory and run `npm install`
- in the `server` directory, run `npm run startup`. This will create the db and seed some data
- finally in the `server` directory, run `npm run dev`
- cd back into the root directory and run `npm start`

## Things I would do differently:

- For the purpose of the test, I decided to create the components from scratch to show my capability. However in an enterprise setting, I would highly consider using a UI framework, depening on the requirements.
- Overall, I would've liked to centralise more of the code, for example, I realised there are quite a few utility types or methods I could've put into a central file, so I annotated a TODO to fix it later.
- If I had more time, I would've liked to handle/catch errors better. Most likey with some sort of Toast component.
- Given more time, I would install storybook.js to aid with testing. I'd also attempt to write feature and e2e tests.
- Given more time, I would focus more on accessiblity.
  -Given more time, I would focus on different element states. Such as hover/focus states, which will also contribute to the accessiblity of the application.

## Acknowledgement

I won't take credit for the design at all. I used [Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9) to help choose what I would like to build.
