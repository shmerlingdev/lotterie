app.controller('listCtrl', function ($scope, listSrv) {

    $scope.lotteries = [];

    listSrv.getAllLotteries().then(function (lotteries) {
        // console.log(lotteries);
        $scope.lotteries = lotteries;

    })

});