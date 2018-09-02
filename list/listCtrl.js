app.controller('listCtrl', function ($scope, listSrv, loginSrv, $location) {

    $scope.lotteries = [];

    listSrv.getAllLotteries().then(function (lotteries) {
        // console.log(lotteries);
        $scope.lotteries = lotteries;

    })


    $scope.isLogged = function () {
        return loginSrv.isLoggedIn()
    }

    $scope.logout = function () {
        loginSrv.logout();
        $location.path('/');
    }


});