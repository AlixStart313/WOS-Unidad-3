const express = require('express');
require('dotenv').config(); //imports
const cors = require('cors');
const { usuariosRouter,categoriasRouter } = require('../modules/controller/routes.js');


const app = express(); //Instanciar server
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors({ origins: '*' })); //Permite recibir cualquier peticion con X origen
app.use(express.json({ limit: '50mb' })); //Permite peticiones hasta 50Mb

//Routes
app.get('/', (request, response) => {
  response.send('Bienvenido a la AppRest StudyPad');
}); //Endpoints
//http://localhost:3000/ -> Primer Endpoint
app.use(`/api/user`,usuariosRouter);
app.use(`/api/category`,categoriasRouter);


module.exports = {
  app,
}; // {app:app}
