const dados = [
  {
    TASK_ID: "AT001",
    STATION: "Estação A",
    DRIVER: "João",
    VEHICLE: "ABC-1234",
    ORDERS: 25,
    STATUS: "EXPEDIDA"
  },
  {
    TASK_ID: "AT002",
    STATION: "Estação B",
    DRIVER: "Carlos",
    VEHICLE: "DEF-5678",
    ORDERS: 18,
    STATUS: "EM PISO"
  }
];

function montarDashboard(dados) {
  console.log("Total:", dados.length);
  console.log(dados);
}

montarDashboard(dados);
