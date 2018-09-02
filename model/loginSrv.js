app.factory('loginSrv', function ($q, $http) {

    var activeUser = null;

    function User(name, email, password) {
            this.name = name,
            this.email = email,
            this.password = password
    }

    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function logout() {
        activeUser = null;
    }

    function login() {
        var async = $q.defer();
        var loginUrl = 'https://json-server-heroku-qxmvaqtheh.now.sh/users';

        $http.get(loginUrl).then(function (response) {
            
            if (response.data.length > 0) {
                activeUser = new User(response.data[0]);
                async.resolve(activeUser)
            } else {
                async.reject('ivalid Credentials')
            }
        }, function (err) {
            async.reject(err)
        });
        return async.promise
    };

    function getActiveUser() {
        return activeUser;
    }

    return {
        activeUser: activeUser,
        isLoggedIn: isLoggedIn,
        logout: logout,
        login: login,
        getActiveUser: getActiveUser
    }
});


