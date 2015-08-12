'use strict';

/**
 * @ngdoc directive
 * @name fiAngulartjeApp.directive:FiProduct
 * @description
 * # FiProduct
 */
angular.module('fiAngulartjeApp')
  .directive('fiorder', () => {
    return {
      templateUrl: 'views/directives/fiorder.html',
      restrict: 'E',
      scope: {
        order: '='
      },
      controller: ['$scope', ($scope) => {
        function extractName(arr) {
          return arr.map((el)=>{return el.name;});
        }
        let ingredientsarray = extractName($scope.order.toppings).concat(extractName($scope.order.condiments));
        $scope.ingredients = ingredientsarray.join(', ');
      }]
    };
  });
