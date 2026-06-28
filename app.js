function atualizarDashboard() {

    const texto = document.getElementById("dadosPlanilha").value;

    if (!texto.trim()) {
        alert("Cole os dados da planilha.");
        return;
    }

    const linhas = texto.trim().split("\n");

    const tabela = document.getElementById("tableBody");
    tabela.innerHTML = "";

    let totalATs = 0;

    const cidades = new Set();
    const drivers = new Set();
    const agencias = new Set();

    // Ignora a primeira linha (cabeçalho)
    for (let i = 1; i < linhas.length; i++) {

        const c = linhas[i].split("\t");

        if (c.length < 19) continue;

        totalATs++;

        cidades.add(c[3]);
        agencias.add(c[13]);

        if (c[15]) {
            drivers.add(c[15]);
        }

        tabela.innerHTML += `
        <tr>
            <td>${c[2]}</td>
            <td>${c[3]}</td>
            <td>${c[4]}</td>
            <td>${c[5]}</td>
            <td>${c[13]}</td>
            <td>${c[15]}</td>
            <td>${c[16]}</td>
            <td>${c[17]}</td>
        </tr>
        `;
    }

    document.getElementById("totalTasks").textContent = totalATs;
    document.getElementById("stations").textContent = cidades.size;
    document.getElementById("drivers").textContent = drivers.size;
    document.getElementById("vehicles").textContent = agencias.size;
    document.getElementById("orders").textContent = totalATs;

    document.getElementById("expedidas").textContent = totalATs;
    document.getElementById("empiso").textContent = 0;
}
