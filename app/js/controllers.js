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

      if ($scope.member.chamber=='rep'){
        $scope.chamber="Representative"
      }else{
        $scope.chamber="Senator"
      }
    }).error(function(){
      alert("Error");
    });
  }]);

donationsControllers.controller('BillCtrl', ['$scope', '$http',  '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('http://localhost:8080/bill/' + $routeParams.billId ).success(function(data) {
      $scope.bill = data;
      var yes =0;
      var no = 0;
      var abstain = 0;
      var repyes = 0;
      var repno = 0;
      var repabs = 0;
      var demyes = 0;
      var demno =0;
      var demabs =0;
      for(var i=0; i<data.votes.length; i++) {
        if(data.votes[i].vote == "Yes"){
          yes = yes +1;
          if(data.votes[i].party == "Republican") {
            repyes = repyes +1;
          }
          else {
            demyes = demyes +1;
          }
        }
        else if(data.votes[i].vote == "No"){
          no = no + 1;
          if(data.votes[i].party == "Republican") {
            repno = repno +1;
          }
          else {
            demno = demno +1;
          }
        }
        else {
          abstain = abstain + 1;
          if(data.votes[i].party == "Republican") {
            repabs = repabs +1;
          }
          else {
            demabs = demabs +1;
          }
        }
      }
      $scope.counts = [yes, no, abstain]
      $scope.repcounts = [repyes, repno, repabs]
      $scope.demcounts = [demyes, demno, demabs]
    }).error(function(){
      alert("Error");
    });
    $scope.votedYay = function(member) {
      return member.vote == "Yes"
    };
    $scope.votedNay = function(member) {
      return member.vote == "No"
    };
    $scope.votedAbstain = function(member) {
      return member.vote == 'Abstain'
    };
    $scope.labels = ["Yes", "No", "Abstain"]
  }]);

donationsControllers.controller('DonorCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('http://localhost:8080/contributor/' + $routeParams.donorId ).success(function(data) {
      $scope.donor = data;
    }).error(function(){
      alert("Error");
    });
  }]);
