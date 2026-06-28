// =====================================================
// GRÁFICOS - CHART.JS (BI STYLE)
// =====================================================

// gráfico global
let grafico = null;

// =====================================================
// CRIAR GRÁFICO PRINCIPAL
// =====================================================

function criarGrafico(ranking, titulo){

    const canvas = document.getElementById("graficoResumo");

    if(!canvas) return;

    // destrói gráfico anterior
    if(grafico){
        grafico.destroy();
    }

    // pega top 10
    const top = ranking.slice(0, 10);

    const labels = top.map(x => x[0]);
    const valores = top.map(x => x[1]);

    grafico = new Chart(canvas, {

        type: "bar",

        data: {

            labels: labels,

            datasets: [{

                label: titulo,

                data: valores,

                backgroundColor: "#ff6a00"

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    display: false
                },

                title: {
                    display: true,
                    text: "Top 10 - " + titulo
                }

            },

            scales: {

                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                },

                y: {
                    beginAtZero: true
                }

            }

        }

    });

}
