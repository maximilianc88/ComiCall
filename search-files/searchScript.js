var searchBtn = $("#searchBtn");
searchBtn.on("click", search);

function search() {
  var searchTerm = $("#search-term")
    .val()
    .trim()
    .toLowerCase();
  var dropDown = $("#drop-down")
    .val()
    .trim()
    .toLowerCase();
  var queryURL =
    "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/search/?format=json&sort=name:asc&api_key=7e2d88929b01cf8dd519b8f457eee445ba0013d6&limit=200&query=" +
    searchTerm;
  var filter;

  $.ajax(queryURL, {
    method: "GET"
  }).then(function(response) {
     switch (dropDown) {
      case "name":
        for (var i=0; i<response.results.length; i++){
          if (response.results[i].name=== undefined || response.results[i].name === null || response.results[i].name === '') {
            continue;
          } else {
        filter = response.results[i].name;
        if (filter.toLowerCase() === searchTerm) {
          console.log(response.results[i].name);

          var newCardDiv = $('<div class="comicCardForRealz paper container" class="card text-card" style="display: flex; flex-direction: row"></div>');
          var newCardBodyDiv = $('<div class="card-body card-body-for-realz" style="display: flex; flex-direction: column; justify-content: center"></div>');
          var newCardH4 = $('<h4 class="card-title"></h4>');
          var newCardImg = $('<img class="cardImage"></img>');
          var newCardP = $('<p class="card-text cardPlot"></p>');
          var newButton = $('<button class="searchBtn">Add to Wishlist</button>');

           $(newCardBodyDiv).append(newCardH4);
           $(newCardBodyDiv).append(newCardImg);
           $(newCardBodyDiv).append(newCardP);
           $(newCardBodyDiv).append(newButton);
           $(newCardDiv).append(newCardBodyDiv);
           $("body").append(newCardDiv);

           $(newCardImg).attr("src", response.results[i].image.original_url);
           $(newCardH4).text(response.results[i].name);
           $(newCardP).text(response.results[i].deck);
    }}
    };
        break;
      case "publisher":
        for (var i=0; i<response.results.length; i++){
          if (response.results[i].publisher === undefined || response.results[i].publisher === null || response.results[i].publisher === '') {
            continue;
          } else {
          filter = response.results[i].publisher.name;
          if (filter.toLowerCase()  === searchTerm) {
          console.log(response.results[i].publisher.name);

          var newCardDiv = $('<div class="comicCardForRealz paper container" class="card text-card" style="display: flex; flex-direction: row"></div>');
          var newCardBodyDiv = $('<div class="card-body card-body-for-realz" style="display: flex; flex-direction: column; justify-content: center"></div>');
          var newCardH4 = $('<h4 class="card-title"></h4>');
          var newCardImg = $('<img class="cardImage"></img>');
          var newCardP = $('<p class="card-text cardPlot"></p>');
          var newButton = $('<button class="searchBtn">Add to Wishlist</button>');

           $(newCardBodyDiv).append(newCardH4);
           $(newCardBodyDiv).append(newCardImg);
           $(newCardBodyDiv).append(newCardP);
           $(newCardBodyDiv).append(newButton);
           $(newCardDiv).append(newCardBodyDiv);
           $("body").append(newCardDiv);

           $(newCardImg).attr("src", response.results[i].image.original_url);
           $(newCardH4).text(response.results[i].name);
           $(newCardP).text(response.results[i].deck);
      }
      };
    };
        break;
      default:
        console.error("drop down value of " + dropDown + " not legit");
    }
  })}