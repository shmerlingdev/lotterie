app.factory('listSrv', function ($q, $http) {

    function Lotterie(productName, description, marketPrice, numberOfParticipants, lotteriePrice, image, sellerUserId, competitors, buyerUserId, isPaid, id) {
        this.productName = productName,
        this.description = description,
        this.marketPrice = marketPrice,
        this.numberOfParticipants = numberOfParticipants,
        this.lotteriePrice =  this.marketPrice/this.numberOfParticipants,
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
        var itemsUrl = 'https://json-server-heroku-qxmvaqtheh.now.sh/lotteries';

        $http.get(itemsUrl).then(function (response) {
            
            response.data.forEach(function (lotterie) {
                lotteries.push(new Lotterie(lotterie.productName, lotterie.description, lotterie.marketPrice, lotterie.numberOfParticipants, lotterie.lotteriePrice, 
                                             lotterie.image, lotterie.sellerUserId, lotterie.competitors, lotterie.buyerUserId, lotterie.isPaid, lotterie.id));
            });
            // console.log(lotteries);
            
            async.resolve(lotteries);
        }, function (response) {
            console.error(response)
            async.reject([])
        });
        return async.promise;
    }


    return {
        Lotterie: Lotterie,
        getAllLotteries: getAllLotteries
        }

});