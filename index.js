# FLATDANGO

# Description
## Description

The ``flatdango``is a application that enables the the user to book for movies,it also enables the user to see the details of the movies.              

# Getting Started


# Installation
# Live link
 [click to open page](http://code-challenge-3-nine.vercel.app/)

## Features


Once the application is opened, you can use the following steps to navigate through :

- The user will be shown a list of movie titles and their details which the user can interact with.

- The user can book for spaces and movies by clicking on the ```Book ticket``` button or unbook by clicking on the ```unbook ticket``` button.



# Development installation


## Installation

To use this repo on your machine requires some simple steps

@@ -34,10 +50,11 @@ To use this repo on your machine requires some simple steps

        git clone https://github.com/your-username-here/Code-Challenge-3.git

# Running the application 
## Running the application 

Running this is very straight forward


Open the index.html file to be able to access the application.
Once the application is opened, you can use the following steps to navigate through :

function getMovies() {
    let list = document.getElementById("movie-list");
    fetch(" http://localhost:3000/films")
    fetch("https://code-challenge-3-nine.vercel.app/db.json")
    .then(res => res.json())
    .then(data =>{
      data.map(movie =>{
      data.films.map(movie =>{
  const content = `
    
    <nav class="Hands"></nav>