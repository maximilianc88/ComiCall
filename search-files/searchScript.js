var searchBtn = $('#searchBtn');
searchBtn.on('click', search);

function search(){
  var searchTerm = $('#search-term').val().trim().toLowerCase();
//   var dropDown = $('#drop-down').val().trim().toLowerCase();
  var queryURL = 'https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/search/?format=json&sort=name:asc&api_key=7e2d88929b01cf8dd519b8f457eee445ba0013d6&limit=1&query=' + searchTerm;
  var filter;

  $.ajax(queryURL, {
    method: 'GET'
  }).then(function(response){
    console.log(response);
    // switch(dropDown) {
    //   case 'character':
    //     filter = response.results[0].name;
    //     break;
    //   case 'publisher':
    //     filter = response.results[0].publisher.name;
    //     break;
    //   case 'title':
    //     filter = response.results[0].name;
    //     break;
    //   default: 
    //     console.error('drop down value of ' + dropDown + ' not legit');

        // var imageUrl = response.results.image.medium_url;
        // console.log(imageUrl);

        // var comicImage = $('<img>');
        // comicImage.attr('src', imageUrl);
        // comicImage.attr('alt', 'comic image');

        $('#cardTitle').text(response.results[0].name);
        $('#cardPlot').text(response.results[0].deck);
        $('#cardImage').attr("src", response.results[0].image.original_url);
      
  });
};

 
