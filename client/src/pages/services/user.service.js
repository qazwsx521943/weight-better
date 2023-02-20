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
    // TODO:
    userFollow(username, follower_id) {
        return axios.post(`${process.env.REACT_APP_API_KEY}/user/${username}/follow`, { follower_id: follower_id });
    }

    userUnfollow(username, follower_id) {
        return axios.post(`${process.env.REACT_APP_API_KEY}/user/${username}/unfollow`, { follower_id: follower_id });
    }

    userAvatar(username, fileData) {
        return axios.post(`${process.env.REACT_APP_API_KEY}/user/${username}/upload/avatar`, fileData);
    }
}

export default new UserService();
