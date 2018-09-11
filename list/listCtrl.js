app.controller('listCtrl', function ($scope, listSrv, loginSrv, $location, $log) {

    if (!loginSrv.isLoggedIn()) {
        $location.path('/');
    }

    $scope.isLogged = function () {
        return loginSrv.isLoggedIn()
    }

    $scope.logout = function () {
        loginSrv.logout();
        $location.path('/');
    }

    $scope.lotteries = [];

    listSrv.getAllLotteries().then(function (lotteries) {
        $scope.lotteries = lotteries;

    });

    $scope.competitorsId = []

    $scope.countMeIn = function ($index) {

        listSrv.countMeIn($index).then(function (competitorsId) {

            // $scope.competitorsId = competitorsId 

        }, function (error) {
            $log.error(error)
        });


        // listSrv.countMeIn($scope.competitors).then(function (competitor) {

        //     // $location.path('/Approvment');

        // }, function (error) {
        //     $log.error(error)
        // });


    }




});