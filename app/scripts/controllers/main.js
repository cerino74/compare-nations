'use strict';

/**
 * @ngdoc function
 * @name cerinoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cerinoApp
 */
angular.module('cerinoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
