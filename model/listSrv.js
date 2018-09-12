app.factory('listSrv', function ($http, $q, loginSrv) {
    function Lotterie(productName, description, marketPrice, numberOfParticipants, lotteriePrice, image, sellerUserId, competitors, buyerUserId, isPaid, id) {
        this.productName = productName,
            this.description = description,
            this.marketPrice = marketPrice,
            this.numberOfParticipants = numberOfParticipants,
            this.lotteriePrice = this.marketPrice / this.numberOfParticipants,
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

            async.resolve(lotteries);
        }, function (err) {
            console.error(err)
            async.reject(err)
        });
        return async.promise;
    }

    function getAllCompetitors(idxOfLotterie){
        var async = $q.defer();
        var itemsUrl = 'https://json-server-heroku-qxmvaqtheh.now.sh/lotteries/' + idxOfLotterie
        $http.get(itemsUrl).then(function (lotterie) {
            
            async.resolve(lotterie.data['competitors']);
        }, function (err) {
            async.reject(err);
        });
        return async.promise;
    };


    function countMeIn(idxOfLotterie, competitors) {


        var competitors = competitors
        var async = $q.defer();
        var itemsUrl = 'https://json-server-heroku-qxmvaqtheh.now.sh/lotteries/' + idxOfLotterie
        var userId = loginSrv.getActiveUser().id

        competitors.push(userId)
        var patch = {
            competitors: competitors
        }

        $http.patch(itemsUrl, patch).then(function (response) {
            
            async.resolve(response.data['competitors']);
        }, function (err) {
            async.reject(err);
        });
        return async.promise;
    };

    return {
        Lotterie: Lotterie,
        getAllLotteries: getAllLotteries,
        countMeIn: countMeIn,
        getAllCompetitors: getAllCompetitors
    }

});