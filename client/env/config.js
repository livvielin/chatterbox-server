// YOU DO NOT NEED TO EDIT this code.
//
// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.
<<<<<<< HEAD
if (!/(&|\?)username=/.test(window.location.search)) {
  var newSearch = window.location.search;
  if (newSearch !== '' & newSearch !== '?') {
    newSearch += '&';
  }
  newSearch += 'username=' + (prompt('What is your name?') || 'anonymous');
  window.location.search = newSearch;
}

// Put your parse application keys here!
=======
// if (!/(&|\?)username=/.test(window.location.search)) {
//   var newSearch = window.location.search;
//   if (newSearch !== '' & newSearch !== '?') {
//     newSearch += '&';
//   }
//   newSearch += 'username=' + (prompt('What is your name?') || 'anonymous');
//   window.location.search = newSearch;
// }

// // Put your parse application keys here!
>>>>>>> c263d31c359f566c36bf543719f378e8f2a20d5d
// $.ajaxPrefilter(function (settings, _, jqXHR) {
//   jqXHR.setRequestHeader("X-Parse-Application-Id", "voLazbq9nXuZuos9hsmprUz7JwM2N0asnPnUcI7r");
//   jqXHR.setRequestHeader("X-Parse-REST-API-Key", "QC2F43aSAghM97XidJw8Qiy1NXlpL5LR45rhAVAf");
// });
