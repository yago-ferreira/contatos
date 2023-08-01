const express = require('express');
const app = express();
const mysql = require('mysql2');
const port = 3306; // Escolha a porta que desejar

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Yago9259588!',
  database: 'agenda',
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) throw err;
  console.log('Conexão ao banco de dados estabelecida.');
});

// Rotas para manipular o CRUD
// Exemplo de rota para buscar todos os registros de uma tabela
app.get('/api/registros', (req, res) => {
  const sql = 'SELECT * FROM contato';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Mais rotas para realizar as operações de CRUD

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
