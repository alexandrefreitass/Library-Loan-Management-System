$(document).ready(function () {
    // Inicializa DataTable com configurações específicas
    $('#Emprestimos').DataTable({
        language: {
            decimal: "",
            emptyTable: "Nenhum registro na tabela",
            info: "Mostrar _START_ de _END_ de _TOTAL_ entradas",
            infoEmpty: "",  // Mensagem para quando a tabela está vazia
            infoFiltered: "(filtradas de um total de _MAX_ entradas)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "6",  // Fixa a quantidade de linhas exibidas
            loadingRecords: "Carregando...",
            processing: "Processando...",
            search: "Pesquisar:",
            zeroRecords: "Nenhum registro correspondente encontrado",
            paginate: {
                first: "Primeiro",
                last: "Último",
                next: "Próximo",
                previous: "Anterior"
            },
            aria: {
                orderable: "Ordenar por esta coluna",
                orderableReverse: "Inverter a ordem por esta coluna"
            }
        },
        pageLength: 6,
        lengthChange: false
    });

    // Função para fechar alertas automaticamente após 5 segundos
    setTimeout(function () {
        $(".alert").fadeOut("slow", function () {
            $(this).alert('close');
        });
    }, 5000);
});
