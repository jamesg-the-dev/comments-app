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

## Acknowledgement

I won't take credit for the design at all. I used [Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9) to help choose what I would like to build.
