const axios = require('axios'); // [cite: 86]

async function procesarImagen(imagen) { // [cite: 87]
    try { // [cite: 88]
        // OJO: Cambia IP_DEL_SERVIDOR por la IP real, por ejemplo: 192.168.1.75
        const respuesta = await axios.post('http://192.168.1.90:3000/procesarImagen', { // [cite: 89]
            imagen // [cite: 89]
        }); // [cite: 90]
        console.log('Imagen procesada:', respuesta.data.imagenProcesada); // [cite: 91]
    } catch (error) { // [cite: 92]
        console.error('Error:', error.response ? error.response.data.error : error.message); // [cite: 94]
    }
}

// Ejemplos de uso asincrono [cite: 95]
const imagenes = ['imagen1.jpg', 'imagen2.png', 'imagen3.gif']; // [cite: 96]

console.log('Procesamiento de imágenes en curso...'); // 

imagenes.forEach((imagen) => { // [cite: 97]
    procesarImagen(imagen); // [cite: 99]
}); // [cite: 98]