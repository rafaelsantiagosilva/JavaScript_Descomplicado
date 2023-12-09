// Declaração de variáveis
let answer = document.getElementById("answer");
let numbers = document.querySelectorAll("input.number");

// Verificando os números
function number_verification(n) {
  let error = false;

  if (n.value === undefined || n.value === null || n.value.trim() === "") {
    error = true;
  } else if (isNaN(n.value)) {
    error = true;
  }

  if (error) {
    alert(`ERRO: Verifique o ${n.id.slice(7, 8)}ºnúmero!`);
  }

  return !error;
}

// Vendo qual é o maior número
function set_bigger() {
  if (
    number_verification(numbers[0]) &&
    number_verification(numbers[1]) &&
    number_verification(numbers[2])
  ) {
    let bigger = 0;

    numbers.forEach((number) => {
      if (Number(number.value) > bigger) {
        bigger = number.value;
      }
    });

    answer.innerHTML = `<p>O maior número é ${bigger}</p>`;
    answer.style.display = "block";

    return bigger;
  }
}
