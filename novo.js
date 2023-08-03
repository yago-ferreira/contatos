$(document).ready(function () {
    const form = document.getElementById('form-contato');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const numero = document.getElementById('numero').value;


        // Criar um objeto para enviar os dados no corpo da requisição POST
        const dados = {
            nome: nome,
            idade: idade,
            numero: numero
        };

        try {
            const response = await fetch('http://localhost:999/api/registros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            if (response.ok) {
                alert('Novo contato e telefone inseridos com sucesso');
                // Atualizar a página 
                location.reload();

            } else {
                const data = await response.json();
                alert(data.error || 'Erro ao inserir novo contato e telefone');
            }
        } catch (error) {
            console.error(error);
            alert('Erro ao conectar com o servidor');
        }
    });
});