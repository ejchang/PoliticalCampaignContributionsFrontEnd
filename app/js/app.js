'use strict';

/* App Module */

var donationsApp = angular.module('donationsApp', [
  'ngRoute',
  'phonecatAnimations',

  'donationsControllers',
  'donationsFilter',
  'phonecatServices'
]);

donationsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/member/:memberId', {
        templateUrl: 'partials/member-detail.html',
        controller: 'MemberCtrl'
      }).
      when('/donor/:donorId', {
        templateUrl: 'partials/donor-detail.html',
        controller: 'DonorCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

function dropdown(val) {
  var y = document.getElementsByClassName('btn btn-default dropdown-toggle');
  var aNode = y[0].innerHTML = val + ' <span class="caret"></span>'; // Append 
}