  // * `my-tweets`
  //node liri.js my - tweets

  // * `spotify-this-song`
  //node liri.js spotify - this - song '<song name here>'
      //* Artist(s)
      //* The song's name
      //* A preview link of the song from Spotify
      //* The album that the song is from
      //* if no song is provided then your program will default to
      //* "The Sign" by Ace of Base
  var spotify = require('spotify');
  //redirect-uri
//open.spotify.com/album/5UwIyIyFzkM7wKeGtRJPgB
   
var inquirer = require("inquirer");

// Created a series of questions
inquirer.prompt([

  {
    type: "input",
    name: "query",
    message: "What song are you looking for?",
    default: "The Sign"
  }
  ]).then(function(user) {
  var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'track'
        },
        success: function (response) {
           console.log(spotify.track);
          console.log(spotify.display_name);
        }
    });
};
          
          
          
          //https://open.spotify.com/album/5UwIyIyFzkM7wKeGtRJPgB
          //https://open.spotify.com/track/6kWJvPfC4DgUpRsXKNa9z9
          // Do something with 'data' 
      });
      //  * `movie-this`
     // node liri.js movie - this '<movie name here>'
          //* Title of the movie.
          //* Year the movie came out.
          //* IMDB Rating of the movie.
          //* Country where the movie was produced.
          //* Language of the movie.
          //* Plot of the movie.
          //* Actors in the movie.
          //* Rotten Tomatoes URL.
          //* If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
          //* It's on Netflix!

      // * `do-what-it-says`
     // node liri.js do -what - it - says `
  // * Using the `
    //      fs ` Node package, 
  // LIRI will take the text inside of random.txt and then use it to 
  // call one of LIRI's commands.
  //   * It should run `
   //   spotify - this - song ` for "I Want it That Way," as follows the text in `
   //   random.txt `.
  //   * Feel free to change the text in that document to test out the feature for other commands.