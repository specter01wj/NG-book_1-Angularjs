
var app = angular.module('myApp', []);

app.controller('MyCont', function($scope){
  $scope.person = {
    name: "James Wang"
  };
  $scope.counter = 0;
  $scope.add = function(amount) {
    $scope.counter += amount;
  };
  $scope.subtract = function(amount) {
    $scope.counter -= amount;
  };
});
