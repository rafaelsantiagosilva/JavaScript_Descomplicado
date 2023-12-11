function unit_price_verification() {
	let error = false;

	if (
		$("#unit_price").val().trim() === null ||
		$("#unit_price").val().trim() === undefined ||
		$("#unit_price").val().trim() === ""
	) {
		error = true;
	} else {
		if (isNaN($("#unit_price").val())) {
			error = true;
		} else {
			if ($("#unit_price").val() <= 0) {
				error = true;
			}
		}

		if (error) {
			window.alert(
				"ERRO: Verifique o campo de PREÇO UNITÁRIO e tente novamente!"
			);
		}

		return !error;
	}
}

function quantity_verification() {
	let error = false;

	if (
		$("#quantity").val().trim() === null ||
		$("#quantity").val().trim() === undefined ||
		$("#quantity").val().trim() === ""
	) {
		error = true;
	} else {
		if (isNaN($("#quantity").val())) {
			error = true;
		} else {
			let quantity_val = Number($("#quantity").val());
			if ($("#quantity").val() <= 0) {
				error = true;
			} else if ($("#quantity").val() > 999) {
				error = true;
			} else if (quantity_val - quantity_val.toFixed(0) != 0) {
				error = true;
			}
		}

		if (error) {
			window.alert("ERRO: Verifique o campo de QUANTIDADE e tente novamente!");
		}

		return !error;
	}
}

function discount_verification() {
	let error = false;

	if (
		$("#discount").val().trim() === null ||
		$("#discount").val().trim() === undefined ||
		$("#discount").val().trim() === ""
	) {
		error = true;
	} else {
		if (isNaN($("#discount").val())) {
			error = true;
		} else {
			if ($("#discount").val() < 0 || $("#discount").val() > 100) {
				error = true;
			}
		}

		if (error) {
			window.alert("ERRO: Verifique o campo de DESCONTO e tente novamente!");
		}

		return !error;
	}
}

$(document).ready(() => {
	$("button.finish").click(() => {
		if (
			unit_price_verification() &&
			quantity_verification() &&
			discount_verification()
		) {
			let unit_price = Number($("#unit_price").val());
			let quantity = Number($("#quantity").val());
			let final_price = unit_price * quantity;
			final_price -= final_price * (Number($("#discount").val()) / 100);
			final_price = final_price.toFixed(2).replace(".", ",");
			$("#answer").html(`O preço final é de R$${final_price}`);
			$("#answer").css("display", "block");
		}
	});
});
