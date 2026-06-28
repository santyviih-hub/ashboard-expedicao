// =====================================================
// DASHBOARD - CARDS / INDICADORES
// =====================================================

function atualizarCards(dados){

    if(!dados || dados.length === 0) return;

    // Total geral
    document.getElementById("totalTasks").textContent = dados.length;

    // Drivers únicos
    document.getElementById("drivers").textContent =
        new Set(dados.map(x => x.driver)).size;

    // Cidades únicas
    document.getElementById("stations").textContent =
        new Set(dados.map(x => x.cidade)).size;

    // Agências (ID DRIVER como referência)
    document.getElementById("vehicles").textContent =
        new Set(dados.map(x => x.idDriver)).size;

    // Expedidas
    document.getElementById("expedidas").textContent =
        dados.filter(x =>
            (x.status || "").toUpperCase().includes("EXP")
        ).length;

    // Em piso
    document.getElementById("empiso").textContent =
        dados.filter(x =>
            (x.status || "").toUpperCase().includes("PISO")
        ).length;

    // SPR preenchido
    document.getElementById("spr").textContent =
        dados.filter(x => x.spr && x.spr !== "").length;

    // Perda SPR
    document.getElementById("perda").textContent =
        dados.filter(x => x.perdaSPR && x.perdaSPR !== "").length;
}
