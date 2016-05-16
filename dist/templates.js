angular.module('atom.b').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/directives/b/b.html',
    "<div>\r       " +
    "\n" +
    "    <h3>B</h3>\r" +
    "\n" +
    "    <super-alert6></super-alert6>    \r" +
    "\n" +
    "</div>"
  );

}]);
