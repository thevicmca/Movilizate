// Función para enviar un mensaje personalizado a WhatsApp
function sendWhatsAppMessage() {
    const inicio = document.getElementById('inicio').value;
    const destino = document.getElementById('destino').value;
    const cantidad = document.getElementById('cantidad').value;
    const username = localStorage.getItem('username');  // Obtener el nombre del usuario guardado

    if (!username) {
        alert('Inicia sesión primero.');
        location.href = 'index.html';
        return;
    }

    const phone = "+50492325149";  // Reemplaza con el número del conductor
    const message = `Hola, soy ${username}. Estoy por ${inicio} con destino a ${destino}, cantidad total de pasajeros: ${cantidad}.`;
    
    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Abrir WhatsApp en una nueva ventana o pestaña
    window.open(whatsappURL, '_blank');


    inicio.selectedIndex = 0;
    destino.selectedIndex = 0;
    cantidad.selectedIndex = 0;
}
