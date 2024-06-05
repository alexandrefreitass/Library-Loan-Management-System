$(document).ready(function () {
    $('#Emprestimos').DataTable({
        language: {
            "decimal": "",
            "emptyTable": "Nenhum registro na tabela",
            "info": "Mostrar _START_ de _END_ de _TOTAL_ entradas",
            "infoEmpty": "",  // Mensagem removida para quando a tabela está vazia
            "infoFiltered": "(filtradas de um total de _MAX_ entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "6",  // Opção para fixar a quantidade de linhas exibidas sem permitir alteração pelo usuário
            "loadingRecords": "Carregando...",
            "processing": "Processando...",
            "search": "Pesquisar:",
            "zeroRecords": "Nenhum registro correspondente encontrado",
            "paginate": {
                "first": "Primeiro",
                "last": "Último",
                "next": "Próximo",
                "previous": "Anterior"
            },
            "aria": {
                "orderable": "Ordenar por esta coluna",
                "orderableReverse": "Inverter a ordem por esta coluna"
            }
        },
        pageLength: 6,  // Mantém a definição de 6 linhas por página
        lengthChange: false  // Desabilita a capacidade do usuário de mudar o número de itens por página
    });

    setTimeout(function () {
        $(".alert").fadeOut("slow", function () {
            $(this).alert('close');
        })
    }, 5000);
});
