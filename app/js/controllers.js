'use strict';

/* Controllers */

var donationsControllers = angular.module('donationsControllers', []);


donationsControllers.controller('HomeCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('http://localhost:8080/congress').success(function(data) {
      $scope.members = data;
    }).error(function(){
      alert("Error");
    });
    $scope.isSenate = function(member) {
      return member.chamber == "Senate"
    };
    $scope.isRep = function(member) {
      return member.chamber == "House"
    };
  }]);


donationsControllers.controller('MemberCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('http://localhost:8080/member/' + $routeParams.memberId ).success(function(data) {
      $scope.member = data;
    }).error(function(){
      alert("Error");
    });
  }]);

donationsControllers.controller('DonorCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('http://localhost:8080/contributor/' + $routeParams.donorId ).success(function(data) {
      $scope.donor = data;
    }).error(function(){
      alert("Error");
    });
  }]);
