// Exemplo de função para buscar todos os registros do banco de dados
function buscarRegistros() {
  return fetch('http://localhost:999/api/registros') 
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return []; // Retorna um array vazio em caso de erro
    });
}
