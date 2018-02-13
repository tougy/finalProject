//loginController-js 
var app = angular.module('myApp');
app.controller('LoginController', function($scope, $rootScope, $http, $stateParams, $state, LoginService) {
   $rootScope.title = "AngularJS Login Sample";
   
   $http.get('employees.json').success(function (data){
          $scope.employees = data;
          $rootScope.users = data;
    });
  
 
   $scope.formSubmit = function() {
     if(LoginService.login($scope.username, $scope.password, $scope.employees)) {
       $rootScope.userName = $scope.username;
       $scope.error = '';
       $scope.username = '';
       $scope.password = '';
       $state.transitionTo('home');
     } else {
       $scope.error = "Incorrect username/password !";
     }   
   };
   
 });