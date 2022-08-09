import AuthService from "@/services/AuthService.js";

export default {
    async mapCronogramas(cronogramas) {
        const response = await AuthService.getCursos();

        return cronogramas.map(cronograma => {
            for (const curso of response.cursos) {
                if (curso.idCurso == cronograma.cronograma.idCurso) {
                    cronograma.cronograma.nombre_curso = curso.nombre_curso;
                    cronograma.cronograma.clave_curso = curso.clave_curso;
                    cronograma.cronograma.clave_especialidad = curso.clave_especialidad;
                    cronograma.cronograma.duracion_horas = curso.duracion_horas;
                    cronograma.cronograma.descripcion_curso = curso.descripcion_curso;
                    break;
                }
            }
            return cronograma;
        });
    },
}