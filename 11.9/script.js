// Arquivo: js/script.js

function buscarCep() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const resultado = document.getElementById('resultado');

    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('logradouro').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('cidade').value = data.localidade;
                    document.getElementById('estado').value = data.uf;

                    resultado.innerHTML = `<p><strong>Endereço encontrado:</strong> ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}</p>`;
                } else {
                    resultado.innerHTML = '<p>CEP não encontrado. Verifique e tente novamente.</p>';
                }
            })
            .catch(error => {
                resultado.innerHTML = '<p>Erro ao buscar CEP. Tente novamente mais tarde.</p>';
            });
    } else {
        resultado.innerHTML = '<p>CEP inválido. Insira um CEP válido.</p>';
    }
}

function calcularFrete() {
    // Implementar lógica para calcular o frete aqui, se necessário
    alert('Calcular Frete clicado!');
}
