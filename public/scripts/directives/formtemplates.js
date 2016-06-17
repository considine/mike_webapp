// Some templates used
//Table of Contents:
//**** 1.) newListingFormLocation: Lease start and end date form directive
//**** 1.) newListingSoonestMove: Soonest available move in, form template
angular.module('formApp')
.directive("newListingFormLocation", function () {
  //var htmlString = '<div>';
  var htmlString = '<div style="display: block;">';
  htmlString = htmlString + '<label for="move-in-date" class="date-picker-label"> LEASE START </label> <br /><input type="text" id="move-in-date" class="datepicker">';
  //line break between them
  //add the second label (same exact thing)
  htmlString = htmlString + '<label for="move-out-date" class="date-picker-label"> LEASE END </label> <br /><input type="text" id="move-out-date" class="datepicker">';
  htmlString += '</div>';
    return {
        template: htmlString

    };
})
.directive("newListingSoonestMove", function () {
  var htmlString = '<div style="display: inline-block">';
  htmlString = htmlString + '<label for="soonest-move-date" class="date-picker-label"> SOONEST START DATE </label> <br /><input type="text" id="soones-move-date" class="datepicker">';
  //line break between them
  htmlString += '</div>';
  return {
    template: htmlString
  };


})



// ''<label for="move-in-date"> Move In Date</label> <br />
//          <input type="text" id="move-in-date" class="datepicker">''
