var map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('google-map-holder'), {
//     center: {lat: 37.769, lng: -122.446},
//     zoom: 8,
//     streetViewControl: true
//   });
//
//
//   map.addListener('click', function(event) {
//     addMarker(event.latLng);
//   });
// }
//
// function addMarker(location) {
//
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map
//   });
//
// }
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('google-map-holder'), {
    zoom: 4,
    center: uluru
  });

  var contentString = '<h1 style="color: black;"> HELO </h1>';
      // '<div id="siteNotice">'+
      // '</div>'+
      // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      // '<div id="bodyContent">'+
      // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      // 'sandstone rock formation in the southern part of the '+
      // 'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      // 'south west of the nearest large town, Alice Springs; 450&#160;km '+
      // '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      // 'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      // 'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      // 'Aboriginal people of the area. It has many springs, waterholes, '+
      // 'rock caves and ancient paintings. Uluru is listed as a World '+
      // 'Heritage Site.</p>'+
      // '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      // 'dick</a> '+
      // '(last visited June 22, 2009).</p>'+
      // '</div>'+
      // '</div>';


  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}


function findAddress (lt, lg) {
  var haightAshbury = {lat: parseFloat(lt), lng: parseFloat(lg)};
  addMarker(haightAshbury);
  map.setZoom(8);
  map.panTo(haightAshbury);
  map.setOptions({
      streetViewControl: showStreetViewControl
    });

}
