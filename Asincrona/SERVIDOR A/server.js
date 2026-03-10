const express = require('express'); // [cite: 69]
const app = express(); // [cite: 70, 71]
const port = 3000; // [cite: 72]

app.use(express.json()); // [cite: 73]

app.post('/procesarImagen', (req, res) => { // [cite: 74]
    const imagen = req.body.imagen; // [cite: 75, 76]
    
    // Simulación de procesamiento de imagen que tarda 2 segundos [cite: 77, 79]
    setTimeout(() => {
        const imagenProcesada = `Imagen procesada: ${imagen}`; // [cite: 78]
        res.send({ imagenProcesada }); // [cite: 78]
    }, 2000); // [cite: 79]
}); // [cite: 80]

app.listen(port, () => { // [cite: 81, 82]
    console.log(`Servidor de imágenes (asincrono) en puerto ${port}`); // [cite: 83]
}); // [cite: 84]