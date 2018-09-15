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

    $scope.completePercentage = 0;

    $scope.getAndCount = function (btn, index) {

        
        
        listSrv.getAllLotteries().then(function (lotteries) {
            
            if (lotteries[index].complete == 0) {
                $scope.completePercentage = 1
            } else {
                $scope.completePercentage = lotteries[index].complete + (((lotteries[index].competitors.length) / lotteries[index].numberOfParticipants) * 100);
            }
            
            // for (let i = 0; i < lotteries[index].competitors.length; i++) {
                //     if (lotteries[index].competitors[i] == loginSrv.getActiveUser().id) {
                    //         console.log(btn);                    
                    //         btn.target.disabled = true;
                    //     }
                    // }
                });
                
                
                listSrv.getAllCompetitors(index).then(function (competitors) {
                    
                    $scope.competitorsId = competitors
                    
                    listSrv.countMeIn(index, $scope.competitorsId, $scope.completePercentage).then(function () {
                        btn.target.disabled = true;

            }, function (error) {
                $log.error(error)
            });

        }, function (error) {
            $log.error(error)
        });
    };


});