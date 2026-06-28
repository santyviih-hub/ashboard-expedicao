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

    for (let i = 1; i < linhas.length; i++) {

        const c = linhas[i].split("\t");

        console.log("ARRAY:", c);

        if (c.length < 19) continue;

        const at = c[2] || "";
        const corredor = c[3] || "";
        const cidade = c[4] || "";
        const bairro = c[5] || "";
        const agencia = c[13] || "";
        const driver = c[15] || "";
        const status = c[16] || "";
        const modal = c[17] || "";

        totalATs++;

        cidades.add(cidade);
        drivers.add(driver);
        agencias.add(agencia);

        tabela.innerHTML += `
            <tr>
                <td>${at}</td>
                <td>${corredor}</td>
                <td>${cidade}</td>
                <td>${bairro}</td>
                <td>${agencia}</td>
                <td>${driver}</td>
                <td>${status}</td>
                <td>${modal}</td>
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
