// =====================================================
// DASHBOARD EXPEDIÇÃO 2.0
// Desenvolvido por etapas
// =====================================================

// Dados da planilha
let dados = [];

// Dados filtrados
let dadosFiltrados = [];

// Gráfico
let grafico = null;

// Coluna atualmente selecionada
let colunaAtual = "";

// Valor do filtro
let filtroAtual = "";

// Colunas da planilha
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

// Relação Nome -> Campo
const MAPA = {

    "JANELA":"janela",
    "STATUS":"status",
    "AT":"at",
    "CORREDOR":"corredor",
    "CIDADE":"cidade",
    "BAIRROS":"bairro",
    "MODAL ROUTING":"modalRouting",
    "SPR ROUTING":"sprRouting",
    "SPR":"spr",
    "PERDA DE SPR":"perdaSPR",
    "DATA ROTA":"dataRota",
    "JANELA 2":"janela2",
    "JANELA 3":"janela3",
    "ID DRIVER":"idDriver",
    "DRIVER NAME":"driver",
    "STATUS PRESENÇA":"presenca",
    "MODAL DRIVER":"modalDriver",
    "PHONE":"phone",
    "STATUS DRIVER":"statusDriver"

};
// =====================================================
// IMPORTAR PLANILHA
// =====================================================

function atualizarDashboard(){

    const texto=document
        .getElementById("dadosPlanilha")
        .value
        .trim();

    if(texto===""){

        alert("Cole os dados da planilha.");

        return;

    }

    dados=[];

    const linhas=texto.split("\n");

    for(let i=1;i<linhas.length;i++){

        const c=linhas[i].split("\t");

        if(c.length<19) continue;

        dados.push({

            janela:c[0],

            status:c[1],

            at:c[2],

            corredor:c[3],

            cidade:c[4],

            bairro:c[5],

            modalRouting:c[6],

            sprRouting:c[7],

            spr:c[8],

            perdaSPR:c[9],

            dataRota:c[10],

            janela2:c[11],

            janela3:c[12],

            idDriver:c[13],

            driver:c[14],

            presenca:c[15],

            modalDriver:c[16],

            phone:c[17],

            statusDriver:c[18]

        });

    }

    dadosFiltrados=[...dados];

    atualizarCards();

    criarBotoes();

    montarTabela(dadosFiltrados);

}
// =====================================================
// CARDS
// =====================================================

function atualizarCards(){

    totalTasks.textContent=dados.length;

    drivers.textContent=
        new Set(dados.map(x=>x.driver)).size;

    stations.textContent=
        new Set(dados.map(x=>x.cidade)).size;

    vehicles.textContent=
        new Set(dados.map(x=>x.idDriver)).size;

    expedidas.textContent=
        dados.filter(x=>

            x.status
            .toUpperCase()
            .includes("EXP")

        ).length;

    empiso.textContent=
        dados.filter(x=>

            x.status
            .toUpperCase()
            .includes("PISO")

        ).length;

    spr.textContent=
        dados.filter(x=>x.spr!="").length;

    perda.textContent=
        dados.filter(x=>x.perdaSPR!="").length;

}
// =====================================================
// TABELA
// =====================================================

function montarTabela(lista){

    const body = document.getElementById("tableBody");

    body.innerHTML = "";

    if(lista.length===0){

        body.innerHTML=`
        <tr>
            <td colspan="19" style="text-align:center;padding:20px;">
                Nenhum registro encontrado
            </td>
        </tr>
        `;

        return;

    }

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

<td>${item.janela2}</td>

<td>${item.janela3}</td>

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
// =====================================================
// PESQUISA
// =====================================================

function pesquisar(){

    const texto=document
    .getElementById("pesquisa")
    .value
    .toLowerCase();

    dadosFiltrados=dados.filter(item=>{

        return Object.values(item)

        .join(" ")

        .toLowerCase()

        .includes(texto);

    });

    montarTabela(dadosFiltrados);

}
// =====================================================
// BOTÕES DOS RESUMOS
// =====================================================

function criarBotoes(){

    const filtros=document.getElementById("filtros");

    filtros.innerHTML="";

    COLUNAS.forEach(coluna=>{

        const btn=document.createElement("button");

        btn.innerText=coluna;

        btn.className="botaoResumo";

        btn.onclick=()=>mostrarResumo(coluna);

        filtros.appendChild(btn);

    });

}
// =====================================================
// LIMPAR FILTRO
// =====================================================

function limparFiltros(){

    dadosFiltrados=[...dados];

    document.getElementById("pesquisa").value="";

    montarTabela(dadosFiltrados);

}
<button onclick="limparFiltros()">
🧹 Limpar Filtros
</button>
