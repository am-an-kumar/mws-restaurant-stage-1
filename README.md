# Restaurant Reviews

## Contents

- [Restaurant Reviews](#restaurant-reviews)
    - [Introduction](#introduction)
    - [Dependencies](#dependencies)
    - [Live link](#live-link)
    - [Using Locally](#using-locally)
    - [Contributing](#contributing)
    - [Project Overview (Original Udacity README)](#project-overview-original-readme)
        - [Project Overview: Stage 1](#project-overview-stage-1)
            - [Specification](#specification)
            - [Project Rubric](#project-rubric)
            - [What do I do from here?](#what-do-i-do-from-here)
            
        - [Leaflet.js and Mapbox:](#leafletjs-and-mapbox)
        - [Note about ES6](#note-about-es6)

## Introduction

This is a restaurant reviews application using which you can see the reviews of restaurants that are filtered based on location and cuisine type.

## Dependencies

Some part of the code was provided by [Udacity](https://github.com/udacity/mws-restaurant-stage-1), and a few external resources were used.

- [leafletjs](https://leafletjs.com/)
- [Mapbox](https://www.mapbox.com/)
- [normalize.css](https://necolas.github.io/normalize.css/)

## Live Link
You can visit [this](https://aman-kumar-rai.github.io/mws-restaurant-stage-1/) github static page and play around with the application.

## Using Locally

Go to the [GitHub repo](https://github.com/aman-kumar-rai/mws-restaurant-stage-1/) for this site and clone it. After that:
* execute ```npm install``` to install live-server
* execute ```npm start``` to start a local server which will also open the app in your default browser.

## Contributing

This projects is a demo project, but if you feel like creating a pull request, feel free to do so. Just follow the standard coding practices.

# Project Overview (Original README)

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### Project Rubric

Your project will be evaluated by a Udacity code reviewer according to the [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view). Please review for detailed project requirements. The rubric should be a resource you refer to periodically to make sure your project meets specifications.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.
