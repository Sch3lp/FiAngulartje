'use strict';

/**
 * @ngdoc service
 * @name fiAngulartjeApp.order
 * @description
 * # order
 * Service in the fiAngulartjeApp.
 */
angular.module('fiAngulartjeApp')
  .service('Orders', ['$resource', 'Fiazard', ($resource, Fiazard) => {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(`${Fiazard.baseurl}api/ordered/order`, {}, {
      getAll: {
         method: 'GET',
         isArray: true
      }
    });
  }]);
