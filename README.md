# ComiCall

## User Story

As a consumer who is interested in comic books, I would like to be able to browse for comics by character and title, create a wish list of comics, and find a nearby comic book store(s) so that I can find comic books that fit my preferences.

## Screenshot

<img src = 'https://user-images.githubusercontent.com/56765185/72659194-d7ed6080-3970-11ea-855f-91bb87147273.png' width = “200”>

## Table of Contents

* [Description](#description)
* [What's Inside](#what's-inside)
* [Deployment](#deployment)
* [Technologies Used](#technologies-used)
* [Status](#status)
* [Authors](#authors)
* [License](#license)

## Description

The purpose of the project is to deliver a friendly, simple, practical comic search application. 
The application is designed to make searching for specif comics just as easy as discovering new comics.
The user enters the website by clicking on the 'Explore' button and is introduced to the comic search application, wish list, and store locator.
Users have the option of storing comic selections to wish lists and inquiring the nearest comic book store location.
This page is formatted to be responsive to multiple viewports. 

## What's Inside

The webpage is comprised of:

1. landing page with Giphy API
2. home page
3. comic search page with Comic Vine API
4. wish list page with save to local storage
5. comic store locator page with Google Maps API

## Deployment

Webpage can be found at this link: https://maximilianc88.github.io/ComiCall/

1. The landing page: the user is greeted and formally invited to enter the application; user clicks enter button (linked to home page)
2. The home page: delivers description of the application and how to use with bold links to each page
3. The navbar: user can choose to navigate to home page, comic search page, wish list page, and comic store locator page
4. The comic search page: user fills out search for that pulls from Comic Vine API and explores returned results; user can click a button that will add comics to the wish list page 
5. The wish list page: user is able to view comics that have been added to wish list; option to remove from list available
6. Comic store locator page: user calls on Google Maps to search for the nearest comic book store to their relative location; store hours displayed with current time immediately visible


## Technologies Used

* Font Awesome
* Comic Vine API
* Google Maps API
* Giphy API
* Paper CSS Framework
* jQuery
* GitHub Pages

## Status

In progress

## Authors

Randall Burgess,
Maximillian Cartwright,
Andrea Thomas

## License 

This project is licensed under the GNU General Public License. See the gnuLICENSE.md for details. 