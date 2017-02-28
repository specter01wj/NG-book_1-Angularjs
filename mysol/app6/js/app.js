
var app = angular.module('myApp', []);

app.controller('ParentCont', function($scope){
  $scope.person = {
    name: "James Wang",
    greeted: false
  };
});

app.controller('ChildCont', function($scope){
  $scope.sayHello = function() {
    $scope.person.name = 'Allen Iverson';
    $scope.person.greeted = true;
  };
});
