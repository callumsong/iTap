var app = angular.module('app', []);

app.controller('timeCont', function($scope, $interval) {
  $scope.time = '';

  $scope.getTime = function() {
    var interval = $interval(function() {
      $scope.time = new Date();
    }, 1000);
  }
});