"use strict";


function getMapScript () {
  this.getMap = function () {
     var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDPCkkkkP7BAsionEIyZsR_z7ur3Ehr3NU&callback=initMap';
    document.body.appendChild(script);
  }; 

}

module.exports = getMapScript;
