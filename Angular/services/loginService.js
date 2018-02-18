//loginService.js
angular.module('yapp').factory('LoginService', function() {
/*     var admin = 'admin';
    var pass = 'password'; */
    var isAuthenticated = false;
    var success = false ;
    // var users = [];

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