// <div id="top-header-bar">
//
// </div>

function setTopBar () {
  return {
    templateUrl: 'templates/topbar.html',
    //template: '<div id="top-header-bar"></div>',
    replace: true,
    controller: 'mainCtrl'
  };
}

module.exports = setTopBar;
