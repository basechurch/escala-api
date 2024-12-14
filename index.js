const express = require('express');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./src/config/swagger');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON no corpo da requisição
app.use(express.json());

// Configuração do Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Importar e usar as rotas
app.use('/api', require('./src/routes'));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const db = require('./src/config/db');

// Testar conexão
db.query('SELECT 1')
  .then(() => console.log('Conexão ao banco de dados bem-sucedida!'))
  .catch(err => console.error('Erro ao conectar ao banco:', err));

const errorHandler = require('./src/middleware/errorHandler');

// Middleware para erros (deve ser o último middleware)
app.use(errorHandler);
