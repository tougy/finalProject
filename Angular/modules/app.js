'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
var states = [
        { name: 'base', state: { abstract: true, url: '', templateUrl: 'views/base.html', data: {roles: [],text: "Base", visible: false } } },
        { name: 'login', state: { url: '/login', parent: 'base', templateUrl: 'views/login.html', controller: 'LoginCtrl', data: {roles: [],text: "Login", visible: false } } },
        { name: 'dashboard', state: { url: '/dashboard', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'DashboardCtrl', data: {roles: ['User'],text: "Dashboard", visible: false } } },
        { name: 'overview', state: { url: '/overview', parent: 'dashboard', templateUrl: 'views/dashboard/overview.html', data: {roles: ['User'],text: "Overview", visible: true } } },
        { name: 'DirectoryList', state: { url: '/DirectoryList', parent: 'dashboard', templateUrl: 'views/dashboard/DirectoryList.html', data: {roles: ['User'],text: "DirectoryList", visible: true } } },
        { name: 'FilesList', state: { url: '/FilesList', parent: 'dashboard', templateUrl: 'views/dashboard/FilesList.html', data: {roles: ['User'],text: "FilesList", visible: true } } },
        { name: 'restricted', state: { url: '/restricted', parent: 'base', templateUrl: 'views/restricted.html', data: {roles: ['Admin'],text: "restricted", visible: false }} },
        { name: 'accessdenied', state: { url: '/denied', parent: 'base', templateUrl: 'views/denied.html', data: {roles: [],text: "accessdenied", visible: false }} },
        { name: 'logout', state: { url: '/login', parent: 'base', templateUrl: 'views/login.html', controller: 'LoginCtrl', data: {roles: [],text: "Logout", visible: true }} }
    ];
   
angular.module('yapp', [
                'ui.router',
                'snap',
                'ngAnimate'
            ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('/dashboard', '/dashboard/overview');
            $urlRouterProvider.otherwise('/login');
            
            angular.forEach(states, function (state) {
                $stateProvider.state(state.name, state.state);
            });
        })
        .run(['$rootScope', '$state', '$stateParams', 'authorization', 'principal',
        function($rootScope, $state, $stateParams, authorization, principal) {
          $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;
    
            if (principal.isIdentityResolved()) authorization.authorize();
        });
    }
  ]);