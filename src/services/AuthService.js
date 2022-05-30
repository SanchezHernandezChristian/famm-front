import axios from 'axios';
const url = 'https://54.243.26.45/api/';
export default {
    login(credentials) {
        return axios
            .post(url + 'login', credentials)
            .then(response => response.data);
    },
    logout() {
        return axios
            .get(url + 'logout')
            .then(response => response.data);
    },
    signUp(user_data) {
        return axios
            .post(url + 'register', user_data)
            .then(response => response.data);
    },
    getProfile() {
        return axios.get(url + 'user-profile').then(response => response.data.data);
    },
    getCursos(){
        return axios.get(url + 'all-grade').then(response => response.data.data);
    },
};
