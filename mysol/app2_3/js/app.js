var app = angular.module('myApp', []);

app.directive('myDirective', function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      myUrl: '@',
      myLinkText: '@'
    },
    template: '<a href="{{myUrl}}">{{myLinkText}}</a>'
  };
});
