// =====================================================
// EXPORTAÇÃO (EXCEL + CSV + PRINT)
// =====================================================

// =====================================================
// EXPORTAR CSV (abre no Excel)
// =====================================================

function exportarCSV(){

    if(!dadosFiltrados || dadosFiltrados.length === 0){
        alert("Sem dados para exportar");
        return;
    }

    const header = [
        "JANELA",
        "STATUS",
        "AT",
        "CORREDOR",
        "CIDADE",
        "BAIRROS",
        "MODAL ROUTING",
        "SPR ROUTING",
        "SPR",
        "PERDA SPR",
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

    let csv = header.join(";") + "\n";

    dadosFiltrados.forEach(item => {

        const row = [
            item.janela,
            item.status,
            item.at,
            item.corredor,
            item.cidade,
            item.bairro,
            item.modalRouting,
            item.sprRouting,
            item.spr,
            item.perdaSPR,
            item.dataRota,
            item.janela2,
            item.janela3,
            item.idDriver,
            item.driver,
            item.presenca,
            item.modalDriver,
            item.phone,
            item.statusDriver
        ];

        csv += row.join(";") + "\n";

    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "dashboard-expedicao.csv";

    link.click();
}

// =====================================================
// IMPRIMIR DASHBOARD
// =====================================================

function imprimirDashboard(){

    window.print();

}
