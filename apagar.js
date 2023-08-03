
// async function apagarContato(data) {
//     try {
//         const response = await fetch(`http://localhost:999/api/registros/${data.id}`, {
//             method: 'DELETE',
//         });

//         if (response.ok) {
          
//             // Log de exclusão

//             alert('Contato e telefone excluídos com sucesso');
//             // Atualizar a página 
//             location.reload();
//         } else {
//             const data = await response.json();
//             alert(data.error || 'Erro ao excluir contato e telefone');
//         }
//     } catch (error) {
//         console.error(error);
//         alert('Erro ao conectar com o servidor');
//     }
// }

async function apagarContato(data) {
    try {
      const response = await fetch(`http://localhost:999/logExclusao`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idcontato: data.id,
          data_criacao: new Date().toLocaleString(),
        }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);
  
        // Realiza a exclusão do contato
        const deleteResponse = await fetch(`http://localhost:999/api/registros/${data.id}`, {
          method: 'DELETE',
        });
  
        if (deleteResponse.ok) {
          alert('Contato e telefone excluídos com sucesso');
          // Atualizar a página
          location.reload();
        } else {
          const deleteData = await deleteResponse.json();
          alert(deleteData.error || 'Erro ao excluir contato e telefone');
        }
      } else {
        const data = await response.json();
        alert(data.error || 'Erro ao excluir contato e telefone');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao conectar com o servidor');
    }
  }
  