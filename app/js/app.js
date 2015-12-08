'use strict';

/* App Module */

var donationsApp = angular.module('donationsApp', [
  'ngRoute',
  'phonecatAnimations',
  'chart.js',
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
      when('/bill/:billId', {
        templateUrl: 'partials/bill-detail.html',
        controller: 'BillCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

function dropdown(val) {
  var y = document.getElementsByClassName('btn btn-default dropdown-toggle');
  var aNode = y[0].innerHTML = val + ' <span class="caret"></span>'; // Append
}
