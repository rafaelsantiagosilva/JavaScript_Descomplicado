// Função para verificar se os números são válidos
function number_verification(number) {
  let error = false;

  if (
    number.val().trim() === "" ||
    number.val().trim() === null ||
    number.val().trim() === undefined
  ) {
    error = true;
  } else {
    if (isNaN(number.val())) {
      error = true;
    }
  }

  if (error) {
    window.alert("ERRO: Verifique os campos e tente novamente!");
  }

  return !error;
}

// "main" do jQuery
$(document).ready(() => {
  $("button.finish").click(() => {
    if (
      number_verification($("#inp_num1")) &&
      number_verification($("#inp_num2")) &&
      number_verification($("#inp_num3")) &&
      number_verification($("#inp_num4"))
    ) {
      let average = 0;
      let values = [
        Number($("#inp_num1").val()),
        Number($("#inp_num2").val()),
        Number($("#inp_num3").val()),
        Number($("#inp_num4").val()),
      ];
      for (let i in values) {
        average += values[i];
      }
      average /= 4;
      // Colocando a resposta
      $("#answer").html(`<p>A média é ${average}</p>`);
      // Mudando a propriedade display do CSS
      $("#answer").css("display", "block");
    }
  });
});
