# Comment Application

## Overview

This app allows a user to add, remove, reply, vote and edit a comment. It has a lightweight server running in node and is hooked up to an sqlite database.

## Prerequisites

- node v20.13.1

## Notes

- Some components may seem a little overkill for a small app like this, e.g. `app-textbox` could've just been a vanilla HTML textarea. However, I decided to try and mimic creating/using a component library.

## Showcase

To run the app, follow these steps:

- run `npm install` in the root directory (this is for the frontend).
- cd into `server` directory and run `npm install`.
- in the `server` directory, run `npm run startup`. This will create the db and seed some data.
- finally in the `server` directory, run `npm run dev`. Keep this running.
- in a new terminal run `npm start` in the root directory.

## Acknowledgement

I won't take credit for the design at all. I used [Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9) to help choose what I would like to build.
