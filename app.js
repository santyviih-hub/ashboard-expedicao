function atualizarDashboard() {

    const texto = document.getElementById("dadosPlanilha").value;

    if (!texto.trim()) {
        alert("Cole os dados da planilha primeiro.");
        return;
    }

    const linhas = texto.trim().split("\n");

    const tabela = document.getElementById("tableBody");
    tabela.innerHTML = "";

    let totalTasks = 0;
    let expedidas = 0;
    let empiso = 0;

    const stations = new Set();
    const drivers = new Set();
    const vehicles = new Set();

    linhas.forEach((linha) => {

        const colunas = linha.split("\t");

        if (colunas.length < 6) return;

        totalTasks++;

        const status = (colunas[5] || "").toUpperCase();

        if (status.includes("EXPEDIDA")) expedidas++;
        if (status.includes("PISO")) empiso++;

        stations.add(colunas[1]);
        drivers.add(colunas[2]);
        vehicles.add(colunas[3]);

        tabela.innerHTML += `
            <tr>
                <td>${colunas[0]}</td>
                <td>${colunas[1]}</td>
                <td>${colunas[2]}</td>
                <td>${colunas[3]}</td>
                <td>${colunas[4]}</td>
                <td>${colunas[5]}</td>
            </tr>
        `;
    });

    document.getElementById("totalTasks").textContent = totalTasks;
    document.getElementById("expedidas").textContent = expedidas;
    document.getElementById("empiso").textContent = empiso;
    document.getElementById("stations").textContent = stations.size;
    document.getElementById("drivers").textContent = drivers.size;
    document.getElementById("vehicles").textContent = vehicles.size;
    document.getElementById("orders").textContent = totalTasks;
}
