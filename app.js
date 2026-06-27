const API_URL = "https://script.google.com/a/macros/shopee.com/s/AKfycbx_nrfc7bAyt2fFJR9kLygrJPe4J0LaVFxS9f1stNP3aokMwNrNHkiMEPozocCQcV6C/exec";

async function carregarDados() {
  try {
    const res = await fetch(API_URL);
    const dados = await res.json();

    console.log("Dados recebidos:", dados);

    montarDashboard(dados);

  } catch (error) {
    console.error("Erro ao carregar dados:", error);
  }
}

function montarDashboard(dados) {
  console.log("Total de registros:", dados.length);

  const statusCount = {};

  dados.forEach(item => {
    const status = item.STATUS;
    statusCount[status] = (statusCount[status] || 0) + 1;
  });

  console.log("Status:", statusCount);
}

carregarDados();

setInterval(carregarDados, 30000);
