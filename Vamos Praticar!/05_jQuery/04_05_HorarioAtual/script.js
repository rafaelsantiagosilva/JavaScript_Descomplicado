// O JSON da API está na pasta JSON

$(document).ready(() => {
	$(".finish").click(() => {
		$.ajax({
			url: "http://worldclockapi.com/api/json/utc/now",
			success: (resultado) => {
				// Novo objeto data, pegando a propriedade currentDateTime do JSON
				let dataHora = new Date(resultado.currentDateTime);
				// Convertendo pra String
				dataHora = dataHora.toLocaleTimeString();
				// Recebendo no HTML
				$("#hour").html(dataHora.slice(0, 5));
				// Convertendo a parte das horas em números
				let hora_num = Number(dataHora.slice(0, 2));
				if(hora_num >= 6 && hora_num < 18 && hora_num > 0){
					$("#hour_image").css('background-image', "url(./images/morning.jpeg)");
				} else{
					$("#hour_image").css('background-image', "url(./images/night.jpeg)")
				}
			},
		});
	});
});
