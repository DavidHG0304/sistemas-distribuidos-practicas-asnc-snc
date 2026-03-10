const axios = require('axios'); // [cite: 36]

async function calcularImpuestos(datos) { // [cite: 37]
    try { // [cite: 38]
        // OJO: Cambia IP_DEL_SERVIDOR por la IP de la máquina que corre el servidor
        const respuesta = await axios.post('http://192.168.1.90:3000/calcularImpuestos', { // [cite: 39]
            datos // [cite: 39]
        }); // [cite: 40]
        console.log(`Impuestos calculados para $${datos.ingresos}: $${respuesta.data.impuestos}`); // [cite: 41]
    } catch (error) { // [cite: 42]
        console.error('Error:', error.response ? error.response.data.error : error.message); // [cite: 43]
    } // [cite: 44]
} // [cite: 45]

// Enviando diferentes conjuntos de datos financieros (Requisito de la rúbrica) [cite: 46]
async function ejecutarPruebas() {
    console.log('Iniciando sistema de cálculo de impuestos en tiempo real...');
    
    // El 'await' obliga al cliente a esperar la respuesta antes de mandar el siguiente [cite: 17]
    await calcularImpuestos({ ingresos: 50000 }); // [cite: 47, 48]
    await calcularImpuestos({ ingresos: 15000 });
    await calcularImpuestos({ ingresos: 85500 });
    
    console.log('Todas las consultas financieras han finalizado.');
}

ejecutarPruebas();