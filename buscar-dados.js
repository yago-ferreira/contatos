// Exemplo de função para buscar todos os registros do banco de dados
async function buscarRegistros() {
  try {
    const response = await fetch('http://localhost:999/api/registros');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

