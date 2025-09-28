export const sendWhatsapp = (mensaje) => {
    const mensajeCodificado = encodeURIComponent(mensaje);
    const telefono = '+56954972720';
    const whatsappUrl = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
    window.open(whatsappUrl, '_blank');
};

const buildMessage = (title) => {
    const nivel = document.getElementById(title);
    console.log(nivel.textContent)
    const mensaje = `Hola, estoy interesado(a) en el curso de ${nivel.textContent}.
    Me gustaría saber cómo puedo inscribirme.`;
    sendWhatsapp(mensaje);
};

document.addEventListener('DOMContentLoaded', () => {

    const whatsappButtonBeginner = document.getElementById('btn-course-beginner');
    const whatsappButtonIntermediate = document.getElementById('btn-course-intermediate');
    const whatsappButtonAdvance = document.getElementById('btn-course-advance');

    if (whatsappButtonBeginner) {
        whatsappButtonBeginner.addEventListener('click', () => buildMessage('title-course-beginner'));
    };
    if (whatsappButtonIntermediate) {
        whatsappButtonIntermediate.addEventListener('click', () => buildMessage('title-course-intermediate'));
    };
    if (whatsappButtonAdvance) {
        whatsappButtonAdvance.addEventListener('click', () => buildMessage('title-course-advance'));
    };
});
