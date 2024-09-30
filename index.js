// apps/orgboat/index.js - Aplicación OrgBoat que maneja múltiples dominios
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9005;

// Middleware para manejar las rutas basadas en el dominio de origen
app.use((req, res, next) => {
    const domain = req.headers.host; // Obtiene el dominio desde el request

    /*
    orgboat.me - managed domain
    orgboat.com - managed domain
    */

    // Lógica para redirigir a diferentes secciones según el dominio
    switch (domain) {
        case 'orgboat.me':
            // Redirigir a la sección específica para orgboat.me
            res.redirect('/me'); // Esta ruta puede renderizar una vista o ejecutar lógica específica
            break;
        case 'orgboat.com':
            // Redirigir a la sección principal de OrgBoat
            res.redirect('/com');
            break;
        default:
            // Redirigir a una página por defecto o mostrar un error si el dominio no es reconocido
            res.redirect('/not-found');
            break;
    }
});

// Definición de las rutas específicas para cada sección
app.get('/me', (req, res) => {
    // Renderiza o maneja la lógica para orgboat.me
    res.send('Bienvenido a OrgBoat.me.');
});

app.get('/com', (req, res) => {
    // Renderiza o maneja la lógica para orgboat.com
    res.send('Bienvenido a OrgBoat.com.');
});

app.get('/not-found', (req, res) => {
    // Muestra una página de error o un mensaje de dominio no reconocido
    res.status(404).send('Dominio no reconocido.');
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`OrgBoat está escuchando en el puerto ${PORT}`);
    // Aquí puedes agregar la lógica para reportarte con Netget si es necesario
});