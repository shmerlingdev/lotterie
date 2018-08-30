var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'home/home.html'
        })

        .when('/new', {
            templateUrl: 'new/new.html',
            controller: 'newCtrl'
        })

        .when('/list', {
            templateUrl: 'list/list.html',
            controller: 'listCtrl'
        })
       
        .otherwise({
            redirectTo: '/'
        });



})