"use strict"; 

angular.module('yapp').controller('LoginCtrl', function($scope, $location, $rootScope, $http, LoginService) {
                $rootScope.title = "David Tugendhaft final Project";
                
                $http.get('users.json').success(function (data){
                       $scope.userList = data;
                       $rootScope.users = data;
                 }); 
                $scope.submit = function() {
                if(LoginService.login($scope.username, $scope.password, $scope.userList)) {
                  $rootScope.userName = $scope.username;
                  $scope.userList.forEach(element => {
                  if ($scope.username === element.name) { 
                    $rootScope.roles = element.roles ;
                     }
                    });
                  $scope.error = '';
                  $scope.username = '';
                  $scope.password = '';
                  $location.path('/dashboard');
                } else {
                  $scope.error = "Incorrect username/password !";
                } 
                principal.authenticate( $rootScope.userName, $rootScope.roles );
                return false;
              }
          
            });