//express
const express = require('express');
const app = express();
const port = 999;
const mysql = require('mysql2');// Obtém o cliente
const cors = require('cors'); // Importe o módulo 'cors'
const bodyParser = require('body-parser');

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


// Usando o middleware 'body-parser' para processar o corpo da requisição
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());// Use o middleware 'cors'


// Rota para buscar todos os registros do banco de dados
app.get('/api/registros', (req, res) => {
  const sql = "SELECT c.id, idade, nome, numero FROM contato c inner join telefone t on t.idcontato = c.id";
  connection.query(sql, function (err, results) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao buscar registros' });
    } else {
      res.json(results); // Envie os resultados como resposta JSON
    }
  });
});
// Rota para atualizar o contato e telefone
app.put('/api/registros/:idcontato', (req, res) => {
  const idContato = req.params.idcontato;
  const { nome, idade, numero } = req.body; // Dados atualizados do contato e telefone

  // Atualizar os dados do contato na tabela contato
  const sqlContato = "UPDATE contato SET nome = ?, idade = ? WHERE id = ?";
  connection.query(sqlContato, [nome, idade, idContato], (err, resultContato) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao atualizar contato' });
    } else {
      // Atualizar o telefone associado ao contato na tabela telefone
      const sqlTelefone = "UPDATE telefone SET numero = ? WHERE idcontato = ?";
      connection.query(sqlTelefone, [numero, idContato], (err, resultTelefone) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Erro ao atualizar telefone' });
        } else {
          res.json({ message: 'Contato e telefone atualizados com sucesso' });
        }
      });
    }
  });
});
// Rota para inserir um novo contato e telefone
app.post('/api/registros', (req, res) => {
  const { nome, idade, numero } = req.body; // Dados do novo contato e telefone

  // Inserir o novo contato na tabela contato
  const sqlContato = "INSERT INTO contato (nome, idade) VALUES (?, ?)";
  connection.query(sqlContato, [nome, idade], (err, resultContato) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao inserir novo contato' });
    } else {
      const idContatoInserido = resultContato.insertId;
      // Inserir o telefone associado ao novo contato na tabela telefone
      const sqlTelefone = "INSERT INTO telefone (idcontato, numero) VALUES (?, ?)";
      connection.query(sqlTelefone, [idContatoInserido, numero], (err, resultTelefone) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Erro ao inserir novo telefone' });
        } else {
          res.json({ message: 'Novo contato e telefone inseridos com sucesso' });
        }
      });
    }
  });
});
// Rota para excluir um contato e seu telefone
app.delete('/api/registros/:idcontato', (req, res) => {
  const idContato = req.params.idcontato;

  // Excluir o telefone associado ao contato na tabela telefone
  const sqlTelefone = "DELETE FROM telefone WHERE idcontato = ?";
  connection.query(sqlTelefone, [idContato], (err, resultTelefone) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao excluir telefone' });
    } else {
      // Excluir o contato na tabela contato após ter excluído o telefone
      const sqlContato = "DELETE FROM contato WHERE id = ?";
      connection.query(sqlContato, [idContato], (err, resultContato) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Erro ao excluir contato' });
        } else {
          res.json({ message: 'Contato e telefone excluídos com sucesso' });
        }
      });
    }
  });
});



// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
