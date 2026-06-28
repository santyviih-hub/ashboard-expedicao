// ===============================
// DASHBOARD EXPEDIÇÃO
// ===============================

let dados = [];
let grafico = null;

const COLUNAS = [
    "JANELA",
    "STATUS",
    "AT",
    "CORREDOR",
    "CIDADE",
    "BAIRROS",
    "MODAL ROUTING",
    "SPR ROUTING",
    "SPR",
    "PERDA DE SPR",
    "DATA ROTA",
    "JANELA 2",
    "JANELA 3",
    "ID DRIVER",
    "DRIVER NAME",
    "STATUS PRESENÇA",
    "MODAL DRIVER",
    "PHONE",
    "STATUS DRIVER"
];

// ===============================
// IMPORTAR PLANILHA
// ===============================

function atualizarDashboard() {

    const texto = document.getElementById("dadosPlanilha").value.trim();

    if (!texto) {
        alert("Cole os dados da planilha.");
        return;
    }

    dados = [];

    const linhas = texto.split("\n");

    for (let i = 1; i < linhas.length; i++) {

        const col = linhas[i].split("\t");

        if (col.length < 19) continue;

        dados.push({
            janela: col[0],
            status: col[1],
            at: col[2],
            corredor: col[3],
            cidade: col[4],
            bairro: col[5],
            modalRouting: col[6],
            sprRouting: col[7],
            spr: col[8],
            perdaSPR: col[9],
            dataRota: col[10],
            janela2: col[11],
            janela3: col[12],
            idDriver: col[13],
            driver: col[14],
            presenca: col[15],
            modalDriver: col[16],
            phone: col[17],
            statusDriver: col[18]
        });

    }

    atualizarCards();
    montarTabela(dados);
    criarBotoes();

}
function atualizarCards(){

    document.getElementById("totalTasks").textContent = dados.length;

    document.getElementById("drivers").textContent =
        new Set(dados.map(x=>x.driver)).size;

    document.getElementById("stations").textContent =
        new Set(dados.map(x=>x.cidade)).size;

    document.getElementById("vehicles").textContent =
        new Set(dados.map(x=>x.idDriver)).size;

    document.getElementById("expedidas").textContent =
        dados.filter(x=>x.status.toUpperCase().includes("EXP")).length;

    document.getElementById("empiso").textContent =
        dados.filter(x=>x.status.toUpperCase().includes("PISO")).length;

    document.getElementById("spr").textContent =
        dados.filter(x=>x.spr!="").length;

    document.getElementById("perda").textContent =
        dados.filter(x=>x.perdaSPR!="").length;

}
function criarBotoes(){

    const filtros = document.getElementById("filtros");

    filtros.innerHTML="";

    COLUNAS.forEach(coluna=>{

        const botao=document.createElement("button");

        botao.innerText=coluna;

        botao.onclick=()=>mostrarResumo(coluna);

        filtros.appendChild(botao);

    });

}
function montarTabela(lista){

    const body=document.getElementById("tableBody");

    body.innerHTML="";

    lista.forEach(item=>{

        body.innerHTML+=`

<tr>

<td>${item.janela}</td>

<td>${item.status}</td>

<td>${item.at}</td>

<td>${item.corredor}</td>

<td>${item.cidade}</td>

<td>${item.bairro}</td>

<td>${item.modalRouting}</td>

<td>${item.sprRouting}</td>

<td>${item.spr}</td>

<td>${item.perdaSPR}</td>

<td>${item.dataRota}</td>

<td>${item.idDriver}</td>

<td>${item.driver}</td>

<td>${item.presenca}</td>

<td>${item.modalDriver}</td>

<td>${item.phone}</td>

<td>${item.statusDriver}</td>

</tr>

`;

    });

}
