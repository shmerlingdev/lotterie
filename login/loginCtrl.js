app.controller('loginCtrl', function ($scope, $location, loginSrv) {



    $scope.isLogged = function () {
        return loginSrv.isLoggedIn()
    }

    $scope.email = '';
    $scope.password = '';
    $scope.invalidLogin = false;


    $scope.login = function () {
        $scope.invalidLogin = false;

        loginSrv.login($scope.email, $scope.password).then(function () {

            $location.path('/options');

        }, function () {
            $scope.invalidLogin = true;
        })
    }


});