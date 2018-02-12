'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location, $rootScope) {
    $scope.submit = function() {
      if(LoginService.login($scope.username, $scope.password)) {
        $rootScope.userName = $scope.username;
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $location.path('/dashboard');
      } else {
        $scope.error = "Incorrect username/password !";
      } 
      return false;
    }

  });
