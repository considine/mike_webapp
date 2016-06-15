angular.module('formApp').factory('messages', function(){
  var messages = {};
  messages.item = -1;
  messages.add = function(message, callback){
    messages.item = message
    messages.callback = callback
  };

  messages.callCallback = function (index) {
    messages.callback(index);
  }
  return messages;
});
