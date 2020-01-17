
// need plot, image, title, "character,"" publisher


// for character: image, title of comic/series they're in, author, character history and name

// for title: image, author, title of comic/series, plot

// for publisher: image, title of comic/series, name of author, plot

// forEach and createElement. Iterate through the response, creating a new element for each friend and appending it to the body.

// result.friendslist.friends.forEach(function(friend){
//     var friendDiv = document.createElement('div');
//     friendDiv.appendChild(document.createTextNode(friend.steamid));
//     document.body.appendChild(friendDiv);
// });
// NB: You could make this more performant by doing only a single append to the body if you created a wrapper element and filled that with the friends before appending it. Like this:

// var wrapperDiv = document.createElement('div');
// result.friendslist.friends.forEach(function(friend){
//     var friendDiv = document.createElement('div');
//     friendDiv.appendChild(document.createTextNode(friend.steamid));
//     wrapperDiv.appendChild(friendDiv);
// });
// document.body.appendChild(wrapperDiv);
      






// // key = 7e2d88929b01cf8dd519b8f457eee445ba0013d6

var title = "";
var character = "";
var publisher = "";

var searchTerm = $('#search-term').val().trim().toLowerCase();

function buildQueryURL() {

    var queryURL = 'https://comicvine.gamespot.com/api/search/?format=json&sort=name:asc&api_key=';
    
    var queryParams = '7e2d88929b01cf8dd519b8f457eee445ba0013d6';
    queryParams.q = $('#search-term')
      .val()
      .trim();

//     console.log(queryURL + $.param(queryParams));
//     return queryURL + $.param(queryParams);
//   };
var queryURL = buildQueryURL();

// Make the AJAX request to the API - GETs the JSON data at the queryURL.
// The data then gets passed as an argument to the updatePage function
$.ajax({
  url: queryURL,
  method: 'GET'
}).then(updatePage);
});