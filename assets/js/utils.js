export const sendWhatsapp = (mensaje) => {
    const mensajeCodificado = encodeURIComponent(mensaje);
    const telefono = '+56954972720';
    const whatsappUrl = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
    window.open(whatsappUrl, '_blank');
};