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
    getProfileDocente() {
        return axios.get(url + 'user-profile').then(response => response.data.docente);
    },
    getCursos() {
        return axios.get(url + 'all-grade').then(response => response.data);
    },
    getMunicipios() {
        return axios.get(url + 'all-township').then(response => response.data);
    },
    getInfoStudent() {
        return axios.get(url + 'all-additional-user-information').then(response => response.data);
    },
    fetchRoles() {
        return axios.get(url + 'all-roles').then(response => response.data);
    },
    registerStudent(data) {
        return axios
            .post(url + 'additional-user-information', data)
            .then(response => response.data);
    },
    addTeacher(data, method = 1) {
        return axios.post(url + `create-teacher-p${method}`, data).then(response => response.data);
    },
    updateTeacher(data) {
        return axios.post(url + 'update-teacher', data).then(response => response.data);
    },
    deleteTeacher(id) {
        return axios.delete(`${url}delete-teacher/${id}`).then(response => response.data);
    },
    getDiscapacidades() {
        return axios.get(url + 'discapacidades').then(response => response.data);
    },
    getEscolaridad() {
        return axios.get(url + 'escolaridades').then(response => response.data);
    },
    getEspecialidades() {
        return axios.get(url + 'all-specialty-information').then(response => response.data);
    },
    getPertenece() {
        return axios.get(url + 'pertenece-a').then(response => response.data);
    },
    fetchUsers() {
        return axios.get(url + 'users').then(response => response.data);
    },
    getUser(id) {
        return axios.get(`${url}get-user/${id}`).then(response => response.data);
    },
    updateUser(data) {
        return axios.put(url + 'update-profile', data).then(response => response.data);
    },
    deleteUser(id) {
        return axios.delete(`${url}delete-profile/${id}`).then(response => response.data);
    },
    addGrade(grade_data) {
        return axios
            .post(url + 'create-grade', grade_data)
            .then(response => response.data);
    },
    getCursoIndividual(claveCurso) {
        return axios.get(url + 'get-grade/' + claveCurso).then(response => response.data);
    },
    deleteGrade(idCurso) {
        return axios.delete(url + 'delete-grade/' + idCurso).then(response => response.data);
    },
    updateGrade(grade_data) {
        return axios
            .put(url + 'update-grade', grade_data)
            .then(response => response.data);
    },
    assignGrade(grade_data) {
        return axios
            .post(url + 'assign-grade', grade_data)
            .then(response => response.data);
    },
    getAllAssignGrade() {
        return axios
            .get(url + 'all-assign-grade-solicitud')
            .then(response => response.data);
    },
    // getAllAssignGradeByCenter() {
    //     const id = 1 //Eliminar cuando se tenga el id del centro de capacitacion al que pertenece el usuario
    //     return axios
    //         .get(url + 'all-assign-grade/' + id)
    //         .then(response => response.data);
    // },
    getAllAssignGradeByTeacher(id) {
        return axios.get(`${url}all-assign-grade-teacher/${id}`).then(response => response.data);
    },
    addCenter(center_data) {
        return axios
            .post(url + 'add-training-center', center_data)
            .then(response => response.data);
    },
    getAllCenters() {
        return axios.get(url + 'all-training-center').then(response => response.data);
    },
    updateCenter(grade_data) {
        return axios
            .put(url + 'update-training-center', grade_data)
            .then(response => response.data);
    },
    deleteCenter(idCurso) {
        return axios.delete(url + 'delete-training-center/' + idCurso).then(response => response.data);
    },
    addEspecialidad(speciality_data) {
        return axios
            .post(url + 'create-specialty', speciality_data)
            .then(response => response.data);
    },
    updateEspecialidad(especialidad_data) {
        return axios
            .put(url + 'update-specialty', especialidad_data)
            .then(response => response.data);
    },
    deleteEspecialidad(idEspecialidad) {
        return axios.delete(url + 'delete-specialty/' + idEspecialidad).then(response => response.data);
    },
    getDocentes() {
        return axios.get(url + 'all-teacher').then(response => response.data);
    },
    getDocente(id) {
        return axios.get(`${url}get-teacher/${id}`).then(response => response.data);
    },
    getCursosDocenteCedula(id) {
        return axios.get(`${url}get-cursos-docente/${id}`).then(response => response.data);
    },
    addCedulaPreAut(data_cedula) {
        return axios
            .post(url + 'create-cedula', data_cedula)
            .then(response => response.data);
    },
    getCedula(id) {
        return axios.get(`${url}get-cedula/${id}`).then(response => response.data);
    },
    getAllCedulas() {
        return axios.get(url + 'all-cedulas').then(response => response.data);
    },
    updateCedulaPreAutorizacion(cedula_data) {
        return axios
            .put(url + 'update-cedula', cedula_data)
            .then(response => response.data);
    },
    deleteCedulaPreAutorizacion(idCedula) {
        return axios.delete(url + 'delete-cedula/' + idCedula).then(response => response.data);
    },
    getAllParticipantes(idFactibilidad) {
        return axios.get(url + 'all-competitor/' + idFactibilidad).then(response => response.data);
    },
    addRelacionParticipante(participante_data) {
        return axios
            .post(url + 'create-competitor', participante_data)
            .then(response => response.data);
    },
    updateRelacionParticipante(relacion_data) {
        return axios
            .put(url + 'update-competitor', relacion_data)
            .then(response => response.data);
    },
    deleteRelacionParticipante(idParticipante) {
        return axios.delete(url + 'delete-competitor/' + idParticipante).then(response => response.data);
    },
    fetchCronogramas() {
        return axios.get(url + 'all-cronogramas').then(response => response.data);
    },
    getCronograma(id) {
        return axios.get(`${url}get-cronograma/${id}`).then(response => response.data);
    },
    addCronograma(data) {
        return axios
            .post(url + 'create-cronograma', data)
            .then(response => response.data);
    },
    updateCronograma(data) {
        return axios.put(url + 'update-cronograma', data).then(response => response.data);
    },
    deleteCronograma(id) {
        return axios.delete(`${url}delete-cronograma/${id}`).then(response => response.data);
    },
    getAllFactibilidades() {
        return axios.get(url + 'all-factibility').then(response => response.data);
    },
    addFactibilidadJustificacion(factibilidad_data) {
        return axios
            .post(url + 'create-factibility', factibilidad_data)
            .then(response => response.data);
    },
    updateFactibilidadJustificacion(factibilidad_data) {
        return axios
            .put(url + 'update-factibility', factibilidad_data)
            .then(response => response.data);
    },
    deleteFactibilidadJustificacion(idFactibilidad) {
        return axios.delete(url + 'delete-factibility/' + idFactibilidad).then(response => response.data);
    },
    getAllAssignUnidad(idUnidad) {
        return axios.get(`${url}all-assign-grade/${idUnidad}`).then(response => response.data);
    },
    getAllAssignSolicitudUnidad(idUnidad) {
        return axios.get(`${url}all-assign-grade-solicitud/${idUnidad}`).then(response => response.data);
    },
    deleteAssignGrade(idCurso, idUnidad) {
        return axios.delete(`${url}delete-assign-grade/${idCurso}/${idUnidad}`).then(response => response.data);
    },
    getAllPayment() {
        return axios.get(url + 'all-payment').then(response => response.data);
    },
    getPayment(id_curso) {
        return axios.get(`${url}get-payment/${id_curso}`).then(response => response.data);
    },
    deletePayment(id_delete) {
        return axios.delete(`${url}delete-payment/${id_delete}`).then(response => response.data);
    },
    createPayment(payment_data) {
        return axios
            .post(url + 'create-payment', payment_data)
            .then(response => response.data);
    },
    updatePayment(pay_data) {
        return axios
            .put(url + 'update-payment', pay_data)
            .then(response => response.data);
    },
    getFullValidCedulas() {
        return axios.get(url + 'full-valid-cedulas').then(response => response.data);
    },
    getPreValidCedulas() {
        return axios.get(url + 'pre-valid-cedulas').then(response => response.data);
    },
    getAllValidCedulas() {
        return axios.get(url + 'all-valid-cedulas').then(response => response.data);
    },
    getEspecialidad(id_e) {
        return axios.get(`${url}get-specialty/${id_e}`).then(response => response.data);
    },
    getHorarioCedula(id_h) {
        return axios.get(`${url}get-horario-cedula/${id_h}`).then(response => response.data);
    },
    getTiposCursos() {
        return axios.get(`${url}type-grade`).then(response => response.data);
    },
    getOficiosSolicitud() {
        return axios.get(`${url}all-oficios-solicitud`).then(response => response.data);
    },
    getOficiosSolicitudUnidad(idUnidad) {
        return axios.get(`${url}all-oficios-solicitud-unidad/` + idUnidad).then(response => response.data);
    },
    getOficioSolicitud(id) {
        return axios.get(`${url}get-oficio-solicitud/${id}`).then(response => response.data);
    },
    createOficioSolicitud(data) {
        return axios.post(url + 'create-oficio-solicitud', data).then(response => response.data);
    },
    updateOficioSolicitud(data) {
        return axios.put(url + 'update-oficio-solicitud', data).then(response => response.data);
    },
    deleteOficioSolicitud(id) {
        return axios.delete(`${url}delete-oficio-solicitud/${id}`).then(response => response.data);
    },
    getGradeUnic(id_grade) {
        return axios.get(`${url}get-grade-by-id/${id_grade}`).then(response => response.data);
    },
    getMunicipioUnic(id_m) {
        return axios.get(`${url}get-township/${id_m}`).then(response => response.data);
    },
    getPreValidFactibility() {
        return axios.get(url + 'get-prevalid-factibility').then(response => response.data);
    },
    getValidFactibility(idUnidad) {
        return axios.get(url + 'get-valid-factibility/' + idUnidad).then(response => response.data);
    },
    getUserByCenter(id_u) {
        return axios.get(`${url}get-user-assign-b-center/${id_u}`).then(response => response.data);
    },
    getCenterUnic(id_c) {
        return axios.get(`${url}get-training-center/${id_c}`).then(response => response.data);
    },
    getCedulaIdCurso(id_cur) {
        return axios.get(`${url}get-cedula-by-id-curso/${id_cur}`).then(response => response.data);
    },
    getCronogramaIdCurso(id_cur) {
        return axios.get(`${url}get-cronograma-by-id-curso/${id_cur}`).then(response => response.data);
    },
    getCursoFactibilidadIdCenter(idUnidad) {
        return axios.get(`${url}all-assign-grade-solicitud-valida/` + idUnidad).then(response => response.data);
    },
    getCursoSolicitudValida(idUnidad) {
        return axios.get(`${url}all-oficios-solicitud-valida-unidad/` + idUnidad).then(response => response.data);
    },
    getAllAssignUnidadCronogramaValido(idUnidad) {
        return axios.get(`${url}all-assign-grade-cronograma-valido/${idUnidad}`).then(response => response.data);
    },
};
