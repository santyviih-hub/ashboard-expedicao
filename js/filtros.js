// =====================================================
// FILTROS INTELIGENTES (BI STYLE)
// =====================================================

// coluna atual selecionada
let colunaSelecionada = null;

// =====================================================
// MOSTRAR RESUMO POR COLUNA
// =====================================================

function mostrarResumo(colunaNome){

    colunaSelecionada = colunaNome;

    const campo = MAPA[colunaNome];

    if(!campo) return;

    const contagem = {};

    dados.forEach(item => {

        let valor = item[campo];

        if(!valor || valor === "") valor = "(Vazio)";

        contagem[valor] = (contagem[valor] || 0) + 1;

    });

    const ranking = Object.entries(contagem)
        .sort((a,b) => b[1] - a[1]);

    renderResumo(ranking, colunaNome, campo);

    criarGrafico(ranking, colunaNome);

}

// =====================================================
// RENDER DO RESUMO
// =====================================================

function renderResumo(ranking, titulo, campo){

    const container = document.getElementById("resumo");

    const tituloEl = document.getElementById("tituloResumo");

    tituloEl.innerText = "Resumo - " + titulo;

    container.innerHTML = "";

    ranking.forEach(item => {

        const div = document.createElement("div");

        div.className = "itemResumo";

        div.innerHTML = `
            <span>${item[0]}</span>
            <strong>${item[1]}</strong>
        `;

        div.onclick = () => aplicarFiltro(campo, item[0]);

        container.appendChild(div);

    });

}

// =====================================================
// APLICAR FILTRO NA TABELA
// =====================================================

function aplicarFiltro(campo, valor){

    const filtrado = dados.filter(item => {

        return (item[campo] || "")
            .toString()
            .toLowerCase()
            .includes(valor.toLowerCase());

    });

    setDadosTabela(filtrado);

}

// =====================================================
// LIMPAR FILTRO GLOBAL
// =====================================================

function limparFiltros(){

    document.getElementById("pesquisa").value = "";

    setDadosTabela(dados);

    document.getElementById("resumo").innerHTML = "";

    document.getElementById("tituloResumo").innerText =
        "Clique em um botão acima";

    if(grafico){
        grafico.destroy();
        grafico = null;
    }

}
