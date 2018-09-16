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

            var lengOfCompetittors = lotteries[index].competitors.length
            var numOfParticipants = lotteries[index].numberOfParticipants
            var howMuchFinish = lotteries[index].complete


            if (lengOfCompetittors == 0) {

                $scope.completePercentage = ((1 / numOfParticipants) * 100)

            } else if (lengOfCompetittors > 0 && lengOfCompetittors < numOfParticipants) {

                $scope.completePercentage = ((lengOfCompetittors + 1) / numOfParticipants) * 100;

            } else if (howMuchFinish >= 100) {
                $scope.completePercentage = 100
            }

            // listSrv.getAllLotteries().then(function (lotteries) {

            //     for (let i = 0; i < lotteries.length; i++) {
            //         if (lotteries[i].complete == 100) {
            //             lotteries.splice(i, 1)
        
            //         }
            //     }
            //     console.log(lotteries);
        
            //     $scope.lotteries = lotteries;
        
            // });

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
        });



    };


});