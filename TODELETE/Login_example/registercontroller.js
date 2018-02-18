//RegisterController.js 
    var app = angular.module('myApp');
        app.controller('RegisterController', 
        function(UserService, $location, FlashService, $scope, $rootScope, $stateParams, $state, LoginService) {
            var vm = this;
            $rootScope.title = "AngularJS Login Sample";
            vm.register = register;
    
            function register() {
                vm.dataLoading = true;
                UserService.Create(vm.user)
                    .then(function (response) {
                        if (response.success) {
                            FlashService.Success('Registration successful', true);
                            $state.transitionTo('/login');
                        } else {
                            FlashService.Error(response.message);
                            vm.dataLoading = false;
                        }
                    });
            }
        });
        var app = angular.module('myApp');
 
        app.controller('HomeController', 
        function($scope, $rootScope, $stateParams, $state, LoginService) {
          $scope.user = $rootScope.userName;
          
        });