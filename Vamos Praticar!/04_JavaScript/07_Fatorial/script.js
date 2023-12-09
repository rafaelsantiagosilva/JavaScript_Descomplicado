// Declarção de variáveis
let answer = document.getElementById("answer");
let number = document.getElementById("number");

// Verificação de dados do número
function number_verification() {
  let error = false;
  if (
    number.value === null ||
    number.value === undefined ||
    number.value.trim() === ""
  ) {
    error = true;
  } else {
    if (isNaN(number.value)) {
      error = true;
    } else if (Number(number.value).toFixed(0) - Number(number.value) != 0) {
      error = true;
    }
  }

  if (error) {
    alert("ERRO: Confira os dados e tente novamente!");
  }

  return !error;
}

// Calculando o fatorial
function calculate_factorial() {
  if (number_verification()) {
    let factorial = 1;
    if (answer.innerHTML != "") {
      answer.innerHTML = "";
    }
    answer.innerHTML += "<p>";
    for (let i = Number(number.value); i >= 1; i--) {
      if (i != 1) {
        answer.innerHTML += `${i} x `;
      } else {
        answer.innerHTML += `${i} = `;
      }
      factorial *= i;
    }
    answer.innerHTML += `${factorial}</p>`;
    answer.style.display = "block";

    return factorial;
  }
}
