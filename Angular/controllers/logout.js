angular.module('yapp').controller('logoutCtrl',function($scope, $location, $rootScope, principal){
    $scope.signout = function() {
        principal.authenticate(null);
        $rootScope.username='';
        $rootScope.role='';
        $location.path('/login');
      };
    }); 