app.controller('newCtrl', function ($scope, newSrv, $location) {

    $scope.productName = '';
    $scope.description = '';
    $scope.marketPrice = '';
    $scope.numberOfParticipants = '';


    

    $scope.addLotterie = function () {

        newSrv.addLotterie($scope.productName, $scope.description, $scope.marketPrice, $scope.numberOfParticipants).then(function (newItem) {
            
            $location.path('/list');

    }, function (error) {
        $log.error(error)
    });

    }

});