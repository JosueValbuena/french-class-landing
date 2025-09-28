document.addEventListener('DOMContentLoaded', () => {

    const whatsappButtonBeginner = document.getElementById('btn-course-beginner');
    const whatsappButtonIntermediate = document.getElementById('btn-course-intermediate');
    const whatsappButtonAdvance = document.getElementById('btn-course-advance');

    const sendWhatsapp = () => {
        const nivel = document.getElementById('title-course-beginner');
        console.log(nivel.textContent)
        const mensajeOriginal = `Hola, estoy interesado(a) en el curso de ${nivel.textContent}.
Me gustaría saber cómo puedo inscribirme o si tienen alguna promoción.`;
        const mensajeCodificado = encodeURIComponent(mensajeOriginal);
        const telefono = '+56954972720';
        const whatsappUrl = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
        window.open(whatsappUrl, '_blank');
    };

    if (whatsappButtonBeginner) {
        whatsappButtonBeginner.addEventListener('click', sendWhatsapp);
    }
});
