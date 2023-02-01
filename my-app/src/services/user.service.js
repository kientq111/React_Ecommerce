import http from '../common/https-common';

class UserDataService {

     login(userName, password) {
        console.log(userName, password);
        return http.post("accounts/login", {userName, password})
    }

    register(){
        return http.post("accounts/register")
    }
}

export default new UserDataService();