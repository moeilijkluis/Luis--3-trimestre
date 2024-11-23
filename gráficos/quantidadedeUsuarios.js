import { getCSS, tickConfig } from "./common.js";

async function quantidadeDeAnimaisPorRegiao() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/habitats-animais.json';
    const res = await fetch(url);
    const dados = await res.json();
    const nomeDasRegioes = Object.keys(dados);
    const quantidadeDeAnimais = Object.values(dados);

    const data = [
        {
            x: nomeDasRegioes, 
            y: quantidadeDeAnimais, 
            type: 'bar',
            marker: {
                color: getCSS('--secondary-color') // Usando a cor vibrante do tema para o gráfico
            }
        }
    ];

    const layout = { 
        plot_bgcolor: getCSS('--bg-color'), // Fundo do gráfico
        paper_bgcolor: getCSS('--bg-color'), // Fundo do papel (do gráfico)
        title: {
            text: 'Habitats com Maior Número de Espécies Protegidas',
            x: 0,
            font: {
                color: getCSS('--primary-color'), // Cor do título
                size: 30,
                family: getCSS('--font') // Fonte do título
            }
        },
        xaxis: {
            tickfont: tickConfig, // Configuração da fonte para os ticks no eixo X
            title: {
                text: 'Regiões ou Habitats',
                font: {
                    color: getCSS('--secondary-color') // Cor do título do eixo X
                }
            }
        },
        yaxis: {
            tickfont: tickConfig, // Configuração da fonte para os ticks no eixo Y
            title: {
                text: 'Quantidade de Espécies Protegidas',
                font: {
                    color: getCSS('--secondary-color') // Cor do título do eixo Y
                }
            }
        }
    };

    // Criando o div para o gráfico
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);

    // Gerando o gráfico com Plotly
    Plotly.newPlot(grafico, data, layout);
}

quantidadeDeAnimaisPorRegiao();
