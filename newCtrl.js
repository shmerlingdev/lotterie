app.controller('newCtrl', function ($scope, newSrv, $location) {


    $scope.productName = '';
    $scope.description = '';
    $scope.marketPrice = '';
    $scope.lotteriePrice = $scope.marketPrice / $scope.numberOfParticipants;
    $scope.numberOfParticipants = '';


    

    $scope.newItem = function () {

        newSrv.addLotterie($scope.productName, $scope.description, $scope.marketPrice, $scope.lotteriePrice, $scope.numberOfParticipants ).then(function (newItem) {
            
            $location.path('/');

    }, function (error) {
        $log.error(error)
    });

    }

});