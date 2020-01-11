var heroApiKey = '?api_key=1hWRn31SiSq1e0iyMDbtgvQyi7YU6Ez4';
var villainApiKey = '?api_key=1hWRn31SiSq1e0iyMDbtgvQyi7YU6Ez4';
//hero gif
var queryURL = 'https://api.giphy.com/v1/gifs/random' + heroApiKey + '&tag=superhero&rating=g';
// villian gif
var queryURL2 = 'https://api.giphy.com/v1/gifs/random' + villainApiKey + '&tag=villain&rating=g';


$.ajax({
  url: queryURL,
  method: 'GET'
}).then(function(result) {
  $("#superhero").attr("src", result.data.images.original.url);
});


$.ajax({
    url: queryURL2,
    method: 'GET'
  }).then(function(result) {
    console.log(result)
    $("#villain").attr("src", result.data.images.original.url);
    
  });