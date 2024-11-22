// Gráfico de Linhas - Vendas de Celulares
const lineChartContext = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineChartContext, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], // Meses
        datasets: [{
            label: 'Unidades Vendidas',
            data: [1500, 2000, 2500, 3000, 3500], // Vendas em unidades de celulares
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 500 // Definindo um passo de 500 unidades para o eixo Y
                }
            }
        }
    }
});

// Gráfico de Barras - Clientes por Modelo de Celular
const barChartContext = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barChartContext, {
    type: 'bar',
    data: {
        labels: ['Modelo A', 'Modelo B', 'Modelo C', 'Modelo D', 'Modelo E'], // Modelos de celular
        datasets: [{
            label: 'Clientes (em número de vendas)',
            data: [800, 1200, 1500, 1800, 2200], // Quantidade de clientes por modelo de celular
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 500 // Definindo um passo de 500 para o eixo Y
                }
            }
        }
    }
});
