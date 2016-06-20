var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('google-map-holder'), {
    center: {lat: 37.769, lng: -122.446},
    zoom: 8,
    streetViewControl: true
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
  map.setZoom(8);
  map.panTo(haightAshbury);
  map.setOptions({
      streetViewControl: showStreetViewControl
    });

}
