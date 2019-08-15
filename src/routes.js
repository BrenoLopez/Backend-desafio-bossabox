const express = require('express');
const routes = express();
const ToolController = require('./controllers/ToolController');


//rota de cadastro das ferramentas 
routes.post('/tools',ToolController.store);
//rota para listar todas as ferramentas
// e lista ferramenta por tag 
routes.get('/tools',ToolController.show);
routes.delete('/tools/:id',ToolController.destroy);

module.exports = routes;