import axios from 'axios';
const url = 'https://54.209.224.205/api/';
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
    getCursos() {
        return axios.get(url + 'all-grade').then(response => response.data);
    },
    getMunicipios() {
        return axios.get(url + 'all-township').then(response => response.data.data);
    },
    registerStudent(data) {
        return axios
            .post(url + 'additional-user-information', data)
            .then(response => response.data);
    },
    getEspecialidades() {
        return axios.get(url + 'all-specialty-information').then(response => response.data);
    },
    addGrade(grade_data) {
        return axios
            .post(url + 'create-grade', grade_data)
            .then(response => response.data);
    },
    getCursoIndividual(claveCurso) {
        return axios.get(url + 'get-grade/' + claveCurso).then(response => response.data);
    },
    deleteGrade(idCurso){
        return axios.delete(url + 'delete-grade/' + idCurso).then(response => response.data);
    },
};
