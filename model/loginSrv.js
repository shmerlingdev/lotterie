app.factory('loginSrv', function () {

    function User(name, email, password) {

            this.name = name,
            this.email = email,
            this.password = password

    }

    

    return {
        User: User
    }
});


