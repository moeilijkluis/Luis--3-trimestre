// Dados de abandono de animais
const dadosAbandono = {
    mundo: {
        gatos: 2000000,
        cachorros: 1500000,
        outros: 500000,
    },
    brasil: {
        gatos: 400000,
        cachorros: 300000,
        outros: 80000,
    },
};

// Função para criar gráficos
function criarGrafico(idCanvas, titulo, dados, cores) {
    const ctx = document.getElementById(idCanvas).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(dados),
            datasets: [{
                label: 'Abandono de Animais',
                data: Object.values(dados),
                backgroundColor: cores,
                borderColor: '#fff',
                borderWidth: 1,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: titulo
                }
            }
        }
    });
}

// Configuração de cores
const coresAnimais = ['#f1c40f', '#27ae60', '#2980b9'];

// Criando gráficos
criarGrafico(
    'graficoMundo',
    'Abandono de Animais no Mundo',
    dadosAbandono.mundo,
    coresAnimais
);

criarGrafico(
    'graficoBrasil',
    'Abandono de Animais no Brasil',
    dadosAbandono.brasil,
    coresAnimais
);
