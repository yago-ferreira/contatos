// Exemplo de função para buscar todos os registros do banco de dados
function buscarRegistros() {
    fetch('/api/registros')
      .then((response) => response.json())
      .then((data) => {
        // Aqui você pode manipular os dados recebidos e exibi-los na página web
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  
  // Outras funções para realizar operações de CRUD
  