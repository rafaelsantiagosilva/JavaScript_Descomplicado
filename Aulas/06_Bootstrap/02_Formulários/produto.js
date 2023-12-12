function validar_descricao() {
	if ($("#desc").val().trim() === "") {
		$("#desc").css("background", "yellow");
		$("#mensagem").html("Preencha a descrição do produto!");
		$("#alerta").modal("show");
		return false;
	} else {
		$("#desc").css("background", "white");
		return true;
	}
}

function validar_quantidade() {
	let erro = false;
	if ($("#qtd").val().trim() === "") {
		erro = true;
	} else if (isNaN($("#qtd").val())) {
		erro = true;
	} else {
		let n_qtd = parseInt($("#qtd").val());
		if (n_qtd < 1 || n_qtd > 999) {
			erro = true;
		}
	}

	if (erro) {
		$("#qtd").css("background", "yellow");
		$("#mensagem").html("A quantidade deve ser um número entre 1 e 999!");
		$("#alerta").modal("show");
	} else {
		$("#qtd").css("background", "white");
	}

	return !erro;
}

function validar_preco() {
	let erro = false;
	if ($("#unit").val().trim() === "") {
		erro = true;
	} else if (isNaN($("#unit").val())) {
		erro = true;
	} else if (Number($("#unit").val()) <= 0.0) {
		erro = true;
	} 

	if (erro) {
		$("#unit").css("background", "yellow");
		$("#mensagem").html("O preço unitário deve ser um número maior que zero!");
		$("#alerta").modal("show");
	} else {
		$("#unit").css("background", "white");
	}

	return !erro;
}

function calcular() {
	if (validar_descricao() && validar_preco() && validar_quantidade()) {
          let preco_total = Number($("#unit").val()) * Number($("#qtd").val());
          $("#total").val(preco_total);
	}
}
