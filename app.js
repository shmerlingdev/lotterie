var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'home/home.html'
        })

        .when('/new', {
            templateUrl: 'new.html',
            controller: 'new/newCtrl'
        })

        .when('/list', {
            templateUrl: 'list.html',
            controller: 'list/listCtrl'
        })
       
        .otherwise({
            redirectTo: '/'
        });



})