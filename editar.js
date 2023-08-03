$(document).ready(function () {
    // Código para enviar os dados do formulário de edição ao servidor quando o botão "Salvar" é clicado
    $("#btn-salvar-edicao").on("click", async function () {
        // Obter o valor do localStorage "userID"
        const idContato = localStorage.getItem("idContato");


        const nome = $("#edit-nome").val();
        const idade = $("#edit-idade").val();
        const numero = $("#edit-numero").val();

        // Criar um objeto para enviar os dados no corpo da requisição PUT
        const dadosEditados = {
            nome: nome,
            idade: idade,
            numero: numero
        };

        // Realizar a requisição PUT com os dados editados
        await editarDados(idContato, dadosEditados);


    });

    async function editarDados(idContato, dadosEditados) {
        try {

            const response = await fetch(`http://localhost:999/api/registros/${idContato}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosEditados)
            });

            if (response.ok) {
                const data = await response.json();
                alert('Contato alterado com sucesso');
                // Atualizar a página 
                location.reload();
            } else {
                const errorData = await response.json();
                alert('Erro ao editar contato e telefone');
                console.error(errorData.error || 'Erro ao editar contato e telefone');
            }
        } catch (error) {
            console.error(error);
            alert('Erro ao conectar com o servidor');
        }
    }
});