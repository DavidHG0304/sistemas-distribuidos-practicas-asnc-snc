const express = require('express'); // [cite: 21]
const app = express(); // [cite: 22, 23]
const port = 3000; // [cite: 24]

app.use(express.json()); // [cite: 25]

app.post('/calcularImpuestos', (req, res) => { // [cite: 26]
    const datosFinancieros = req.body.datos; // [cite: 28]
    
    // LOG 1: Registra la solicitud recibida (Requisito de la rúbrica)
    console.log(`[SERVIDOR] Solicitud recibida. Calculando impuestos para ingresos de: $${datosFinancieros.ingresos}`);
    
    // Simulación de cálculo de impuestos (reemplaza con lógica real) [cite: 29]
    const impuestos = datosFinancieros.ingresos * 0.20; // [cite: 30]
    
    // LOG 2: Registra la respuesta enviada (Requisito de la rúbrica)
    console.log(`[SERVIDOR] Cálculo terminado. Enviando resultado: $${impuestos}`);
    
    res.send({ impuestos }); // [cite: 31]
}); // [cite: 27]

app.listen(port, () => { // [cite: 32]
    console.log(`Servidor de impuestos (sincrono) en puerto ${port}`); // [cite: 34]
}); // [cite: 33]