var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('google-map-holder'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

function addMarker(lat, lng) {

  location = {lat, lng};
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker);
}
