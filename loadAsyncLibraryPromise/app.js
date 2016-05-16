(function () {
  'use strict';

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var element;
      element         = document.createElement('script');
      element.src     = src;
      element.onload  = resolve;
      element.onerror = reject;
      document.head.appendChild(element);
    });
  }

  loadScript('asyncLibrary.js')
    .then(function (done) {
      console.log(window.myVar);
    })
    .catch(function (err) {
      console.log(err);
    });

})();
