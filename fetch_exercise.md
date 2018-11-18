# Promises, Promises

## Step 1: Refactorin'

Copy your Random Dog Image app and adjust it to use `fetch` instead of `XMLHttpRequest`. You shouldn't have to change any of your DOM stuff to complete this - all of your refactoring should be inside your button listener.

## Step 2: Ghibli Time

Create an app that includes a drop-down menu (`select`). This drop-down menu should contain each Studio Ghibli film in the Ghibli API.

When the user selects a film, underneath the `select` box, information about the film should render. This information should include (where available):

- The movie's title
- The movie's director
- A short description
- The movie's release date
- The movie's Rotten Tomatoes score

Each time the user selects a new film, the information about that movie should replace the previous movie.

**Question to consider:** Do you have to make a new request every time the user selects a movie? Is there a way to pre-load all of the movies? Where and how would you store these movies?

// flow: load domcontent -> load fetch request -> fill the select menu with options, store it in var -> on click, fill sumthn else
