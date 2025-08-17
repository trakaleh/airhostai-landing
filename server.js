const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public')); // Servir archivos estáticos

// Ruta principal - servir landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API de prueba
app.get('/api/test', (req, res) => {
    res.json({ 
        message: '🚀 AirHost Assistant API funcionando!',
        status: 'OK',
        timestamp: new Date().toISOString(),
        features: [
            'Channel Manager',
            'Fianzas Automáticas',
            'Smart Locks',
            'WhatsApp IA'
        ]
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`🌐 Landing page: http://localhost:${PORT}`);
    console.log(`🔧 API test: http://localhost:${PORT}/api/test`);
});