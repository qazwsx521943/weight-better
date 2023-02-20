import axios from "axios";

// 關於使用者資料的api
class UserService {
    userProfile(username) {
        return axios.get(`${process.env.REACT_APP_API_KEY}/user/${username}`);
    }

    updateUser(username, data) {
        return axios.post(`${process.env.REACT_APP_API_KEY}/user/${username}`, data);
    }

    userOrders(username) {
        return axios.get(`${process.env.REACT_APP_API_KEY}/user/${username}/orders`);
    }
}

export default new UserService();
