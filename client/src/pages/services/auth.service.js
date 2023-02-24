import axios from "axios";

// 關於驗證的api
class AuthService {
    localLogin(loginData) {
        return axios.post(process.env.REACT_APP_API_KEY + "/auth/login", loginData);
    }
    googleLogin() {
        window.open(process.env.REACT_APP_API_KEY + "/auth/google");
        // return axios.post(process.env.REACT_APP_API_KEY + "/auth/google/login", loginData);
    }

    githubLogin() {
        // window.location.assign(`https://github.com/login/oauth/authorize?client_id=654b686d803fdde176eb`);
    }

    logout() {
        localStorage.removeItem("user");
    }
    register(formData) {
        return axios.post(process.env.REACT_APP_API_KEY + "/user/register", formData);
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();
