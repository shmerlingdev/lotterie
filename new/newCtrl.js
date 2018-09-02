app.controller('newCtrl', function ($scope, newSrv, $location, loginSrv) {

    $scope.productName = '';
    $scope.description = '';
    $scope.marketPrice = '';
    $scope.numberOfParticipants = '';


    $scope.isLogged = function () {
        return loginSrv.isLoggedIn()
    }

    $scope.logout = function () {
        loginSrv.logout();
        $location.path('/');
    }


    $scope.addLotterie = function () {

        newSrv.addLotterie($scope.productName, $scope.description, $scope.marketPrice, $scope.numberOfParticipants).then(function (newItem) {
            
            $location.path('/list');

    }, function (error) {
        $log.error(error)
    });

    }

});