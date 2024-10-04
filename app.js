const express = require('express');  
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http'); // Importar el módulo http
require('dotenv').config();

const Usuario = require('./src/routes/Usuarios');
const Aprendiz = require('./src/routes/Aprendices');
const Bitacora = require('./src/routes/Bitacoras');
const Ficha = require('./src/routes/Fichas');

const app = express();
app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde el directorio "public"
app.use(express.static("public"));

app.use('/api/Usuario', Usuario);
app.use('/api/Aprendiz', Aprendiz);
app.use('/api/Bitacora', Bitacora);
app.use('/api/Ficha', Ficha);

// Crear el servidor HTTP
const server = http.createServer(app);

// Escuchar en el puerto especificado
server.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${process.env.PORT}`);
  
  connect("mongodb+srv://jamoro77:javier.960511@cluster0.wxmxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log('connected'));
});

