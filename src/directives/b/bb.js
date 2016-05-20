/**
 * A directive that displays a B
 *
 * @namespace b
 * @param {string} [name] - In case you want to change b
 * @example
 * ```html
 * <b></b>
 * ```
 */
(function () {
    'use strict';
    
    function bb() {
        return {
            restrict: 'E',
            //scope: {
            //},
            replace: false,
            templateUrl: '/directives/b/bb.html',
            link: function (scope, element, attrs) {
  
            }
        };
    };
    angular.module('atom.b').directive('bb', bb);
})();
