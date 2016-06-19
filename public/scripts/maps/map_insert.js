var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('google-map-holder'), {
    center: {lat: 37.769, lng: -122.446},
    zoom: 8
  });

  map.addListener('click', function(event) {
    addMarker(event.latLng);
  });
}

function addMarker(location) {

  var marker = new google.maps.Marker({
    position: location,
    map: map
  });

}


function findAddress (lt, lg) {
  var haightAshbury = {lat: parseFloat(lt), lng: parseFloat(lg)};
  addMarker(haightAshbury);
  map.setZoom(17);
  map.panTo(haightAshbury);
  //location = {lt: parseFloat(lt), lng: parseFloat(lng)};
  // var marker = new google.maps.Marker({
  //   position: location,
  //   map: map
  // });
}
