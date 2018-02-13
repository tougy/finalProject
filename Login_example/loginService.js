//loginService.js
var app = angular.module('myApp');
  
  app.factory('LoginService', function() {
    var admin = 'admin';
    var pass = 'password';
    var isAuthenticated = false;
    var success = false ;

    return {
      login : function(username, password, users) {
        users.forEach(element => {
        isAuthenticated = username === element.name && password === element.pass;
        if (isAuthenticated) { 
          success = true ;
          }
        });
        isAuthenticated = success;
        success = false ;
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
    
  });