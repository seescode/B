(function () {
    'use strict';
    

    function b() {
        return {
            restrict: 'E',
            //scope: {
            //},
            replace: false,
            templateUrl: '/directives/b/b.html',
            link: function (scope, element, attrs) {
  
            }
        };
    };
    angular.module('atom.b').directive('b', b);
})();