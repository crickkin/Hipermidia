$(document).ready(function () {
    console.log("Started");
    const maxBedrooms = 3;
    const types = ['Single', 'Double', 'Triplo'];
    const prices = [139, 220, 340];

    for (let i = 0; i < maxBedrooms; i++) {
        let a = $('#qtdQuartos').append(`<option value="${i+1}">${i+1}</option>`);
    }

    $('#qtdQuartos').click(function () { 
        let valor = $('#qtdQuartos').val();
        if (valor == 1 || valor == 2 || valor == 3){
            $('#opcoesDeQuartos').empty();
            for (let i = 0; i < valor; i++) {
                $('#opcoesDeQuartos').append(`<p>Quarto ${i+1}</p><select id="bedroomType${i+1}"><option value="0">Single (R$ 139,00)</option><option value="1">Double (R$ 220,00)</option><option value="2">Triplo (R$ 340,00)</option></select>`);
            }
        }
    });

    $('#children').click(function () { 
        if ($('#children').is(':checked')){
            let qtdMaxCriancas = $('#qtdQuartos').val();
            let options = '';
            for (let i = 0; i < qtdMaxCriancas; i++) {
                options += `<option value=${i+1}>${i+1}</option>`;
            }
            $('#qtdCriancas').append(`<select id='qtdChildrenSelected'>${options}</select>`);
        }
        else{
            $('#qtdCriancas').empty();
        }
    });

    $("#reservar").click(function () {
        let totalAPagar = 0;

        let reserva = {
            nome: $('#nome').val(),
            telefone: $('#telefone').val(),
            dtChegada: $('#dataChegada').val(),
            dtSaida: $('#dataSaida').val(),
            qtdQuartos: $("#qtdQuartos").val(),
            quarto: [],
            crianca: $('#children').is(':checked'),
            qtdCriancas: $('#children').is(':checked') ? $('#qtdChildrenSelected').val() : 0,
        }

        for (let i = 0; i < reserva.qtdQuartos; i++) {
            reserva.quarto.push($(`#bedroomType${i+1}`).val())
        }

        $('#containerReserva').empty();
        $('#containerReserva').append('<h2>Informações da Reserva<h2>');
        $('#containerReserva').append(`<p>Nome: ${reserva.nome}</p>`);
        $('#containerReserva').append(`<p>Telefone: ${reserva.telefone}</p>`);
        $('#containerReserva').append(`<p>Data de Chegada: ${reserva.dtChegada}</p>`);
        $('#containerReserva').append(`<p>Data de Saída: ${reserva.dtSaida}</p>`);
        if (reserva.qtdQuartos != 0){
            reserva.quarto.map((e, i) => {
                totalAPagar += prices[reserva.quarto[i]];
                $('#containerReserva').append(`<p>Quarto ${i+1}: ${types[reserva.quarto[i]]}</p>`);
            })
        }
        if (reserva.crianca){
            $('#containerReserva').append(`<p>Total de Crianças: ${reserva.qtdCriancas}</p>`);
        }
        
        $('#containerReserva').append(`<p>Total a pagar: R$${totalAPagar},00</p>`);
    });
});