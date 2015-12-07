'use strict';

/* Controllers */

var donationsControllers = angular.module('donationsControllers', []);


donationsControllers.controller('HomeCtrl', ['$scope', '$rootScope','$http',
  function($scope, $rootScope, $http) {
    $http.get('http://localhost:8080/congress').success(function(data) {
      $scope.members = data;
    }).error(function(){
      alert("Error");
    });
    $scope.isSenate = function(member) {
      return member.chamber == "sen"
    };
    $scope.isRep = function(member) {
      return member.chamber == "rep"
    };
  }]);


donationsControllers.controller('MemberCtrl', ['$scope', '$http',  '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('http://localhost:8080/member/' + $routeParams.memberId ).success(function(data) {
      $scope.member = data;
    }).error(function(){
      alert("Error");
    });
    $scope.details = { show: true };
  }]
);

donationsControllers.controller('DonorCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('http://localhost:8080/contributor/' + $routeParams.donorId ).success(function(data) {
      $scope.donor = data;
    }).error(function(){
      alert("Error");
    });
  }]);
