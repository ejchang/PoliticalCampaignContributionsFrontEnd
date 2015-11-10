'use strict';

/* Filters */

angular.module('donationsFilter', [])
.filter('senate', function() {
  return function(input) {
    console.log("hello")
    return input.chamber == 'Senate'
  }
})
