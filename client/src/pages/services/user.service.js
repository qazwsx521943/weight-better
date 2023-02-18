import axios from "axios";

class UserService {
    userProfile(username) {
        return axios.get(`${process.env.REACT_APP_API_KEY}/user/${username}`);
    }
}

export default new UserService();
