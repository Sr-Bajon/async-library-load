(function () {
  'use strict';

  angular.module('loadAsync', []);

  angular.module('loadAsync')
    .provider('loadLib', {
      loadAsyncLib: function (src) {
        return new Promise(function (resolve, reject) {
          var element;
          element         = document.createElement('script');
          element.src     = src;
          element.onload  = resolve;
          element.onerror = reject;
          document.head.appendChild(element);
        });
      },
      $get        : function () {
        return this.loadAsyncLib;
      }
    });

  angular.module('loadAsync')
    .value('loaded', {
      loaded: false
    });

  angular.module('loadAsync')
    .config(['loadLibProvider', 'loadedProvider', function (loadLibProvider, loadedProvider) {
      loadLibProvider.loadAsyncLib('asyncLibrary.js')
        .then(function () {
          loadedProvider.$get().loaded = true;
        })
        .catch(function (err) {
          console.log(err);
        });
    }]);

})();
