// Adicionar contexto explicativo
function adicionarContexto(idContainer, texto) {
    const container = document.getElementById(idContainer);
    const paragrafo = document.createElement('p');
    paragrafo.textContent = texto;
    paragrafo.style.marginTop = '10px';
    container.appendChild(paragrafo);
}

// Contexto para cada gráfico
adicionarContexto(
    'graficos-container',
    'Este gráfico mostra o número estimado de animais abandonados no mundo por espécie.'
);

adicionarContexto(
    'graficos-container',
    'Este gráfico apresenta os dados de abandono de animais no Brasil, divididos por espécies.'
);
