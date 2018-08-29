app.factory('listSrv', function ($q, $http) {

    function Lotteries(productName, description, marketPrice, lotteriePrice, numberOfParticipants, image, sellerUserId, competitors, buyerUserId, isPaid, id) {
        this.productName = productName,
        this.description = description,
        this.marketPrice = marketPrice,
        this.lotteriePrice = lotteriePrice,
        this.numberOfParticipants = numberOfParticipants
        this.image = image,
        this.sellerUserId = sellerUserId,
        this.competitors = competitors,
        this.buyerUserId = buyerUserId,
        this.isPaid = isPaid,
        this.id = id
    }

    function getAllLotteries() {

        var lotteries = [];
        var async = $q.defer();
        var itemsUrl = 'https://json-server-heroku-qxmvaqtheh.now.sh';

        $http.get(itemsUrl).then(function (response) {
            
            response.data.lotteries.forEach(function (lotterie) {
                lotteries.push(new Lotteries(lotterie.productName, lotterie.description, lotterie.marketPrice, lotterie.lotteriePrice, lotterie.numberOfParticipants,
                                             lotterie.image, lotterie.sellerUserId, lotterie.competitors, lotterie.buyerUserId, lotterie.isPaid, lotterie.id));
            });
            
            async.resolve(lotteries);
        }, function (response) {
            console.error(response)
            async.reject([])
        });
        return async.promise;
    }


    return {
        Lotteries: Lotteries,
        getAllLotteries: getAllLotteries
        }

});