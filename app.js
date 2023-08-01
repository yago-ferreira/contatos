const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000; // Escolha a porta que desejar

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'seu_host_mysql',
  user: 'seu_usuario_mysql',
  password: 'sua_senha_mysql',
  database: 'seu_banco_de_dados_mysql',
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) throw err;
  console.log('Conexão ao banco de dados estabelecida.');
});

// Rotas para manipular o CRUD
// Exemplo de rota para buscar todos os registros de uma tabela
app.get('/api/registros', (req, res) => {
  const sql = 'SELECT * FROM tabela';
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
