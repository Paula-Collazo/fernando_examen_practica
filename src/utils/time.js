export function formDate(date){
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
        
    }

    return date.toLocaleString("es-ES", options)
}

export function calcularDiferencia (horaInicio, horaFin){
    const diferencia = horaFin - horaInicio;

    if(diferencia <= 0)  return null;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    return {dias, horas, minutos, segundos};
}