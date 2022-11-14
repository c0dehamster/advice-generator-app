# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/screenshot.png)

### Links

-   [Solution URL](https://github.com/c0dehamster/advice-generator-app/settings/pages)
-   [Live Site URL](https://c0dehamster.github.io/advice-generator-app/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow
-   Fetch API
-   [Advice slip API](https://api.adviceslip.com/)

### What I learned

This challenge was a good practice for writing asynchronous JS code using async / await syntax.

Testing my app, I found an issue which resulted in the page showing the same advice multiple times when opened in Firefox. After taking a look at other solutions on Frontend Mentor and reading more about HTTP requests on MDN, I found out that the problem was related to HTTP response caching. Passing the 2nd argument to the fetch() function solved the problem:

const response = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })

### Continued development

I am looking forward to learn about more complex use cases of Fetch API

### Useful resources

-   [JavaScript Fetch API](https://www.javascripttutorial.net/javascript-fetch-api/) - Article about Fetch API
-   [JavaScript Infinite Scroll](https://www.javascripttutorial.net/javascript-dom/javascript-infinite-scroll/) - A good practical example of using async / await

## Author

-   Frontend Mentor - [@twDevNoob](https://www.frontendmentor.io/profile/twDevNoob)
