import axios from "axios";

class AuthService {
    localLogin(loginData) {
        return axios.post(process.env.REACT_APP_API_KEY + "/auth/login", loginData);
    }
    googleLogin() {
        return process.env.REACT_APP_API_KEY + "/auth/google";
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
