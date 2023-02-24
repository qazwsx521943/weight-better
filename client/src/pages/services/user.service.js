import axios from "axios";
let config = { headers: { Authorization: JSON.parse(localStorage.getItem("user"))?.token } };
// 關於使用者資料的api
class UserService {
    userProfile(username) {
        // console.log(JSON.parse(localStorage.getItem("user")).token);
        return axios.get(`${process.env.REACT_APP_API_KEY}/user/find/${username}`, config);
    }

    userFollowing(username) {
        return axios.get(`${process.env.REACT_APP_API_KEY}/user/find/${username}/following`);
    }

    userFollowers(username) {
        return axios.get(`${process.env.REACT_APP_API_KEY}/user/find/${username}/followers`);
    }

    updateUser(id, data) {
        return axios.post(`${process.env.REACT_APP_API_KEY}/user/update/profile/${id}`, data);
    }

    userOrders(username) {
        return axios.get(`${process.env.REACT_APP_API_KEY}/user/find/${username}/orders`);
    }

    userFollow(following_username, follower_id) {
        return axios.post(
            `${process.env.REACT_APP_API_KEY}/user/follow`,
            {
                follower_id: follower_id,
                following_username: following_username,
            },
            config
        );
    }

    userUnfollow(following_username, follower_id) {
        return axios.post(`${process.env.REACT_APP_API_KEY}/user/unfollow`, {
            follower_id: follower_id,
            following_username: following_username,
        });
    }

    userDelFan(follower_username, following_id) {
        return axios.post(`${process.env.REACT_APP_API_KEY}/user/deletefan`, {
            follower_username: follower_username,
            following_id: following_id,
        });
    }

    userAvatar(username, fileData) {
        return axios.post(`${process.env.REACT_APP_API_KEY}/user/upload/avatar/${username}`, fileData);
    }
}

export default new UserService();
