export default {
    dateToString(d) {
        const monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];
        let date = new Date(d);
        return `${date.getDate()} de ${monthNames[date.getMonth()]} del ${date.getFullYear()}`;
    }
}