<h1 align="center">Projeto Contato - Documentação</h1>

<h2>Descrição do Projeto</h2>
<p>Este é o repositório do projeto Contato, que tem como objetivo demonstrar um CRUD de contatos com a possibilidade de exportar as queries de criação das tabelas em formato SQL. O projeto utiliza as tecnologias HTML, CSS, Bootstrap, JavaScript, jQuery e MySQL.</p>

<h2>Dependências do Projeto</h2>
<ul>
  <li><strong>cors (^2.8.5)</strong>: O pacote "cors" é utilizado para lidar com as políticas de segurança CORS (Compartilhamento de Recursos de Origens Cruzadas) no servidor. CORS é uma medida de segurança implementada pelos navegadores para evitar que recursos sejam acessados por domínios diferentes. O pacote "cors" permite configurar as permissões de acesso a recursos no servidor, tornando possível que seu projeto frontend possa interagir com o backend de forma segura.</li>
  <li><strong>express (^4.18.2)</strong>: O pacote "express" é um framework para aplicativos web Node.js. Ele facilita a criação de rotas, middleware e manipulação de solicitações e respostas HTTP. O "express" torna mais intuitivo desenvolver um servidor web em Node.js, tornando-o mais rápido e eficiente.</li>
  <li><strong>mysql2 (^3.5.2)</strong>: O pacote "mysql2" é um driver Node.js para interagir com bancos de dados MySQL. Ele oferece uma interface para fazer consultas e transações com o banco de dados MySQL. Com o "mysql2", seu projeto Node.js pode se conectar ao banco de dados MySQL e executar operações de leitura e escrita nos dados.</li>
</ul>

<h2>Tecnologias Utilizadas</h2>
<p>HTML, CSS, Bootstrap, JavaScript, jQuery, MySQL</p>

<h2>Instruções de Uso</h2>
<ol>
  <li><strong>Instalação do Node.js</strong>: O projeto é baseado no ambiente Node.js, portanto, é necessário tê-lo instalado para executar o servidor. Você pode baixá-lo no seguinte link: <a href="https://nodejs.org/" target="_blank">https://nodejs.org/</a></li>
  <li><strong>Configuração do ambiente MySQL</strong>: Instale o servidor MySQL na sua máquina a partir do link: <a href="https://dev.mysql.com/downloads/mysql/" target="_blank">https://dev.mysql.com/downloads/mysql/</a>. No projeto Node.js, instale o pacote "mysql2" executando o seguinte comando: <code>npm install mysql2</code>.</li>
  <li><strong>Execução do servidor HTTP local</strong>: Para executar o servidor HTTP local, você pode usar o pacote http-server do Node.js. Primeiro, instale-o globalmente com o comando: <code>npm install -g http-server</code>. Em seguida, navegue até o diretório do projeto onde o arquivo <code>index.html</code> está localizado e execute o seguinte comando para iniciar o servidor: <code>http-server --cors</code>. Isso iniciará um servidor HTTP local e exibirá um endereço que você pode usar no navegador para acessar a sua página web.</li>
  <li><strong>Habilitação do CORS</strong>: Caso encontre um erro no console do navegador relacionado ao CORS ("has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource"), siga as instruções para habilitar o CORS no Express.js usando a biblioteca "cors": <code>npm install cors</code>.</li>
</ol>

<h2>Criação das Tabelas</h2>
<pre><code>
CREATE TABLE `contato` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `idade` decimal(3,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `telefone` (
  `idcontato` decimal(14,0) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `numero` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`,`idcontato`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
</code></pre>

<h2>Funcionalidades</h2>
<ul>
  <li>CRUD de Contatos: Permite adicionar, visualizar, atualizar,excluir contatos e pesquisar.</li>
  <li>Exportar os dados da tabela: Possibilidade de exportar no formato PDF e Excel</li>
</ul>
