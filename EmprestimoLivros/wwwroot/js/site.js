$(document).ready(function () {
    $('#Emprestimos').DataTable({
        language: {
            "decimal": "",
            "emptyTable": "Nenhum registro na tabela",
            "info": "Mostrar _START_ de _END_ de _TOTAL_ entradas",
            "infoEmpty": "Mostrar 0 de 0 de 0 entradas",
            "infoFiltered": "(filtered from _MAX_ total entries)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ entradas",
            "loadingRecords": "Loading...",
            "processing": "",
            "search": "Pesquisar:",
            "zeroRecords": "No matching records found",
            "paginate": {
                "first": "Primeiro",
                "last": "Último",
                "next": "Próximo",
                "previous": "Anterior"
            },
            "aria": {
                "orderable": "Order by this column",
                "orderableReverse": "Reverse order this column"
            }
        }
    });

    setTimeout(function () {
        $(".alert").fadeOut("slow", function () {
            $(this).alert('close');
        })
    }, 5000);
});