app.controller('loginCtrl', function ($scope, $location, loginSrv) {

    $scope.isLogged = function () {
        return loginSrv.isLoggedIn()
    }

    $scope.email = '';
    $scope.password = '';

    $scope.login = function () {

        loginSrv.login($scope.email, $scope.password).then(function () {

            $location.path('/options');

        });

    };

});