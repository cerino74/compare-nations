'use strict';

/**
 * @ngdoc function
 * @name cerinoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cerinoApp
 */
angular.module('cerinoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
