const express = require('express');
const app = express();
const mysql = require('mysql2');
const port = 999; // Escolha a porta que desejar

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Yago9259588!',
  database: 'agenda',
  port: 3306, // Porta do MySQL (padrão é 3306)
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) throw err;
  console.log('Conexão ao banco de dados estabelecida.');
});

// Rota para buscar todos os registros do banco de dados
app.get('http://localhost:999/api/registros', (req, res) => {
    const sql = 'SELECT * FROM contato';
    db.query(sql, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar registros' });
      } else {
        res.json(result);
      }
    });
  });


// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
