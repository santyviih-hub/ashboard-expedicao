Papa.parse("tasks.csv", {
    download: true,
    header: true,

    complete: function(results) {

        const data = results.data.filter(r => r["Task ID"]);

        document.getElementById("totalTasks").innerText = data.length;

        const expedidas = data.filter(x =>
            x["Driver ID"] && x["Driver ID"] !== ""
        ).length;

        document.getElementById("expedidas").innerText = expedidas;
        document.getElementById("empiso").innerText = data.length - expedidas;

        const stations = [...new Set(data.map(x => x["Station name"]))];
        document.getElementById("stations").innerText = stations.length;

        const drivers = [...new Set(
            data.map(x => x["Driver name"]).filter(Boolean)
        )];

        document.getElementById("drivers").innerText = drivers.length;

        const vehicles = [...new Set(
            data.map(x => x["Vehicle Type"]).filter(Boolean)
        )];

        document.getElementById("vehicles").innerText = vehicles.length;

        let totalOrders = 0;

        data.forEach(row => {
            totalOrders += Number(row["Number of order"]) || 0;
        });

        document.getElementById("orders").innerText =
            totalOrders.toLocaleString("pt-BR");

        const tbody = document.getElementById("tableBody");

        data.slice(0, 300).forEach(row => {

            tbody.innerHTML += `
            <tr>
                <td>${row["Task ID"] || ""}</td>
                <td>${row["Station name"] || ""}</td>
                <td>${row["Driver name"] || ""}</td>
                <td>${row["Vehicle Type"] || ""}</td>
                <td>${row["Number of order"] || ""}</td>
                <td>${row["Delivery Date"] || ""}</td>
            </tr>`;
        });

        const stationCount = {};

        data.forEach(row => {
            const station = row["Station name"];

            if (!station) return;

            stationCount[station] =
                (stationCount[station] || 0) + 1;
        });

        new Chart(
            document.getElementById("stationChart"),
            {
                type: "bar",
                data: {
                    labels: Object.keys(stationCount),
                    datasets: [{
                        label: "AT's por Estação",
                        data: Object.values(stationCount)
                    }]
                }
            }
        );
    }
});
