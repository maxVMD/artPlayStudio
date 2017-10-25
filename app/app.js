'use strict';
angular.module('artPlayApp', ['ui.bootstrap', 'ngTouch', 'ngAnimate']);

angular.module('artPlayApp').config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
