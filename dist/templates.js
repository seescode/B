angular.module('atom.b').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/directives/b/b.html',
    "<div>\r" +
    "\n" +
    "    <h3>B</h3>\r" +
    "\n" +
    "    <super-alert5></super-alert3>    \r" +
    "\n" +
    "</div>"
  );

}]);
