var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'home.html'
        })

        .when('/new', {
            templateUrl: 'new.html',
            controller: 'newCtrl'
        })

        .when('/list', {
            templateUrl: 'list.html',
            controller: 'listCtrl'
        })
       
        .otherwise({
            redirectTo: '/'
        });



})