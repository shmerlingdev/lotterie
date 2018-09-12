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



    $scope.getAndCount = function ($index) {

        listSrv.getAllCompetitors($index).then(function (competitors) {

            $scope.competitorsId = competitors

            listSrv.countMeIn($index, $scope.competitorsId).then(function (competitorsId) {


            }, function (error) {
                $log.error(error)
            });

        }, function (error) {
            $log.error(error)
        });
    };
});