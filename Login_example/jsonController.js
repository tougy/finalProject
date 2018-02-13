/* var myApp  =  angular.module('myApp', []);

myApp.controller('jsonCtrl', function($scope, $http, $rootScope){
	$http.get('employees.json').success(function (data){
        $scope.employees = data;
        $rootScope.users = data;
	});

    $scope.addEmp = function(){
        $scope.employees.push({ name:$scope.empName, city:$scope.empCity, state:$scope.empState });
    }
    
    $scope.getTotalEmployees    =   function(){
        return $scope.employees.length;    
    }
        
    $scope.reversedMessage  =   function(){
        return $scope.empName.split("").reverse().join("");
    }
    
}); */