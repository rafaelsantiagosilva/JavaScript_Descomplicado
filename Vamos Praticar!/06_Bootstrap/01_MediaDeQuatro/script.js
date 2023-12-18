function numbers_validation(number) {
	let error = false;
	if (isNaN(number)) {
		error = true;
	}

	if (error) {
		$("#alert").modal("show");
	}

	return !error;
}

function calculate_average() {
	if (
		numbers_validation($("#inp_n1").val()) &&
		numbers_validation($("#inp_n2").val()) &&
		numbers_validation($("#inp_n3").val()) &&
		numbers_validation($("#inp_n4").val())
	) {
		let soma = 0;
		for (let i = 1; i <= 4; i++) {
			soma += Number($(`#inp_num${i}`).val());
		}
		soma /= 4;
		$("#total").html(soma);
	}
}
