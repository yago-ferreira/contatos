async function apagarContato(data) {
    try {
        const response = await fetch(`http://localhost:999/api/registros/${data.id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            alert('Contato e telefone excluídos com sucesso');
            // Atualizar a página 
            location.reload();
        } else {
            const data = await response.json();
            alert(data.error || 'Erro ao excluir contato e telefone');
        }
    } catch (error) {
        console.error(error);
        alert('Erro ao conectar com o servidor');
    }
}