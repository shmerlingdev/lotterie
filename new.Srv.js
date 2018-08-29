app.factory('newSrv', function ($q, $http) {


    function addLotterie(productName, description, marketPrice, lotteriePrice, numberOfParticipants) {

        var async = $q.defer();

        var itemsUrl = 'https://json-server-heroku-qxmvaqtheh.now.sh';

        var patch = {
            productName: productName,
            description: description,
            marketPrice: marketPrice,
            lotteriePrice: lotteriePrice,
            numberOfParticipants:numberOfParticipants
        }

        $http.post(itemsUrl, patch).then(function (response) {
            
            async.resolve(response);
        }, function (response) {
            console.error(response)
            async.reject([])
        });
        return async.promise;
    }


    return {

        addLotterie: addLotterie
    }

});
