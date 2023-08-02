//express
const express = require('express');
const app = express();
const port = 999;
const mysql = require('mysql2');// Obtém o cliente
const cors = require('cors'); // Importe o módulo 'cors'

// Cria a conexão com o Banco de Dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Yago9259588!',
  database: 'agenda',
  port: 3306, // Porta do MySQL (padrão é 3306)
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) throw err;
  console.log('Conexão ao banco de dados estabelecida.');
});



app.use(cors());// Use o middleware 'cors'

// Rota para buscar todos os registros do banco de dados
app.get('/api/registros', (req, res) => {
  const sql = 'SELECT * FROM `contato`';
  connection.query(sql, function (err, results) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao buscar registros' });
    } else {
      res.json(results); // Envie os resultados como resposta JSON
    }
  });
});


// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
