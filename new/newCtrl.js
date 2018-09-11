app.controller('newCtrl', function ($scope, newSrv, $location, loginSrv) {

    if (!loginSrv.isLoggedIn()) {
        $location.path('/');
    }

    $scope.productName = '';
    $scope.description = '';
    $scope.marketPrice = null;
    $scope.numberOfParticipants = null;
    $scope.lotteriePrice =  function(){
        
        return $scope.marketPrice/$scope.numberOfParticipants
    };
    $scope.sellerUserId = loginSrv.getActiveUser().id
    $scope.competitors = [];


    $scope.isLogged = function () {
        return loginSrv.isLoggedIn()
    }

    $scope.logout = function () {
        loginSrv.logout();
        $location.path('/');
    }


    $scope.addLotterie = function () {

        newSrv.addLotterie($scope.productName, $scope.description, $scope.marketPrice, $scope.numberOfParticipants, $scope.lotteriePrice(), $scope.sellerUserId,
             $scope.competitors).then(function (newItem) {
            
            $location.path('/list');

    }, function (error) {
        $log.error(error)
    });

    }

});