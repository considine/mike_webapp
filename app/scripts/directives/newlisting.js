function soonestMove () {
  //TODO pt
  var htmlString = '<div style="display: inline-block">';
  htmlString = htmlString + '<label for="soonest-move-date" class="date-picker-label"> SOONEST START DATE </label> <br /><input type="text" id="soones-move-date" class="datepicker">';
  //line break between them
  htmlString += '</div>';
  return {
    template: htmlString
  };


}
module.exports = soonestMove;
