const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Rota principal para verificar se o backend está online
app.get('/', (req, res) => {
  res.json({ status: 'Backend está online e funcionando!' });
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