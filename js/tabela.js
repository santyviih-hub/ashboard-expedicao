// =====================================================
// TABELA - RENDERIZAÇÃO + PESQUISA + FILTROS
// =====================================================

let dadosGlobais = [];
let dadosAtuais = [];

// Recebe os dados do app.js ou dashboard.js
function setDadosTabela(dados) {
    dadosGlobais = dados;
    dadosAtuais = [...dados];
    montarTabela(dadosAtuais);
}

// =====================================================
// MONTAR TABELA
// =====================================================

function montarTabela(lista) {

    const body = document.getElementById("tableBody");

    body.innerHTML = "";

    if (!lista || lista.length === 0) {
        body.innerHTML = `
            <tr>
                <td colspan="19" style="text-align:center;padding:20px;">
                    Nenhum dado encontrado
                </td>
            </tr>
        `;
        return;
    }

    lista.forEach(item => {

        body.innerHTML += `
        <tr>
            <td>${item.janela || ""}</td>
            <td>${item.status || ""}</td>
            <td>${item.at || ""}</td>
            <td>${item.corredor || ""}</td>
            <td>${item.cidade || ""}</td>
            <td>${item.bairro || ""}</td>
            <td>${item.modalRouting || ""}</td>
            <td>${item.sprRouting || ""}</td>
            <td>${item.spr || ""}</td>
            <td>${item.perdaSPR || ""}</td>
            <td>${item.dataRota || ""}</td>
            <td>${item.janela2 || ""}</td>
            <td>${item.janela3 || ""}</td>
            <td>${item.idDriver || ""}</td>
            <td>${item.driver || ""}</td>
            <td>${item.presenca || ""}</td>
            <td>${item.modalDriver || ""}</td>
            <td>${item.phone || ""}</td>
            <td>${item.statusDriver || ""}</td>
        </tr>
        `;
    });
}

// =====================================================
// PESQUISA GLOBAL
// =====================================================

function pesquisar() {

    const texto = document.getElementById("pesquisa").value.toLowerCase();

    if (!texto) {
        dadosAtuais = [...dadosGlobais];
        montarTabela(dadosAtuais);
        return;
    }

    dadosAtuais = dadosGlobais.filter(item => {

        return Object.values(item)
            .join(" ")
            .toLowerCase()
            .includes(texto);

    });

    montarTabela(dadosAtuais);
}

// =====================================================
// RESET DA TABELA
// =====================================================

function resetTabela() {
    dadosAtuais = [...dadosGlobais];
    montarTabela(dadosAtuais);
}
