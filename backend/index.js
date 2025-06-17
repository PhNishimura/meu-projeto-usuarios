const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Configuração de CORS mais explícita
const corsOptions = {
  origin: '*', // Permite requisições de QUALQUER origem.
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Garante que as requisições OPTIONS (preflight) também recebam os headers de CORS
app.options('*', cors(corsOptions));

// Rota principal para verificar se o backend está online
app.get('/', (req, res) => {
  res.json({ 
    status: 'Backend está online!',
    versao: '4.0 - TESTE FINAL CORS' // Esta é a nossa "impressão digital"
  });
});

// Rota que devolve alguns dados de exemplo
app.get('/data', (req, res) => {
  const sampleData = [
    { id: 1, nome: 'Produto A', preco: 19.99 },
    { id: 2, nome: 'Produto B', preco: 25.50 }
  ];
  res.json(sampleData);
});

app.listen(port, () => {
  console.log(`Backend simples rodando na porta ${port}`);
});