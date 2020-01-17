var searchBtn = $('#searchBtn');
searchBtn.on('click', search);

function search(){
  var searchTerm = $('#search-term').val().trim().toLowerCase();
  var dropDown = $('#drop-down').val().trim().toLowerCase();
  var queryURL = 'https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/search/?format=json&sort=name:asc&api_key=7e2d88929b01cf8dd519b8f457eee445ba0013d6&query=' + searchTerm;
  var filter;

  $.ajax(queryURL, {
    method: 'GET'
  }).then(function(response){
    console.log(response);
    switch(dropDown) {
      case 'character':
        filter = response.results.name;
        break;
      case 'publisher':
        filter = respone.publisher.name;
        break;
      case 'title':
        filter = response.title;
        break;
      default: 
        console.error('drop down value of ' + dropDown + ' not legit');
    };
    // if(filter === searchTerm){
      
      // create cards and append to DOM
    // }
  });
};

 
