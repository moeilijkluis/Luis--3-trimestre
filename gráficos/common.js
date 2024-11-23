const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function vizualizarInformacoesGlobais() {
    try {
        // Fazendo a requisição dos dados
        const res = await fetch(url);
        const dados = await res.json();

        // Convertendo valores para milhões (mais legível)
        const animaisSantuarios = (dados.animais_em_santuarios / 1e6).toFixed(2);
        const animaisNoMundo = (dados.animais_no_mundo / 1e6).toFixed(2);

        // Calculando a porcentagem de animais em santuários
        const porcentagemProtegida = ((animaisSantuarios / animaisNoMundo) * 100).toFixed(2);

        // Criando o parágrafo para exibição
        const paragrafo = document.createElement('p');
        paragrafo.classList.add('graficos-container__texto');
        paragrafo.innerHTML = `
            Você sabia que existem cerca de <span>${animaisNoMundo} milhões</span> de animais no mundo, e que aproximadamente 
            <span>${animaisSantuarios} milhões</span> estão protegidos em santuários ou reservas? 🐾<br>
            Isso significa que <span>${porcentagemProtegida}%</span> das espécies conhecidas estão vivendo sob algum tipo de proteção.<br>
            Esses esforços são fundamentais para preservar a biodiversidade e garantir um futuro para inúmeras espécies. 🌿🐒
        `;

        // Encontrando o container onde o parágrafo será inserido
        const container = document.getElementById('graficos-container');
        container.appendChild(paragrafo);

    } catch (error) {
        // Tratamento de erro
        console.error("Erro ao carregar os dados:", error);
        const erroParagrafo = document.createElement('p');
        erroParagrafo.classList.add('graficos-container__texto');
        erroParagrafo.innerHTML = "Desculpe, não conseguimos carregar as informações no momento. Por favor, tente novamente mais tarde. 🐾⚠";
        document.getElementById('graficos-container').appendChild(erroParagrafo);
    }
}
