'use strict';

/**
 * @ngdoc function
 * @name fiAngulartjeApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the fiAngulartjeApp
 */
angular.module('fiAngulartjeApp')
  .controller('PlacedOrdersCtrl', ['$scope','$stateParams','Orders', ($scope, $stateParams, Orders) => {
        $scope.orders = Orders.getAll();
    }]);
