export const sendWhatsapp = (mensaje) => {
    const mensajeCodificado = encodeURIComponent(mensaje);
    const telefono = '+5219331375679';
    const whatsappUrl = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
    window.open(whatsappUrl, '_blank');
};