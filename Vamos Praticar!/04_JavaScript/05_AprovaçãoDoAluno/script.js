// Declaração das variáveis
let answer = document.getElementById("answer");
let grade_1 = document.getElementById("grade_1");
let grade_2 = document.getElementById("grade_2");

function grade_1_verification() {
  let error = false;

  if (
    grade_1.value === null ||
    grade_1.value === undefined ||
    grade_1.value.trim() === ""
  ) {
    error = true;
  } else {
    if (isNaN(grade_1.value)) {
      error = true;
    } else if (grade_1.value < 0 || grade_1.value > 10) {
      error = true;
    }
  }

  if (error) {
    alert("ERRO: Verifique o campo da nota 1 e tente novamente!");
  }

  return !error;
}

function grade_2_verification() {
  let error = false;

  if (
    grade_2.value === null ||
    grade_2.value === undefined ||
    grade_2.value.trim() === ""
  ) {
    error = true;
  } else {
    if (isNaN(grade_2.value)) {
      error = true;
    } else if (grade_2.value < 0 || grade_2.value > 10) {
      error = true;
    }
  }

  if (error) {
    alert("ERRO: Verifique o campo da nota 2 e tente novamente!");
  }

  return !error;
}

function define_status(average) {
  if (average >= 6) {
    return "<span class='green'>APROVADO</span>";
  } else {
    return "<span class='red'>REPROVADO</span>";
  }
}

function calculate_grades_average() {
  if (grade_1_verification() && grade_2_verification()) {
    let average = (Number(grade_1.value) + Number(grade_2.value)) / 2;
    answer.innerHTML = `<p>A média do aluno é de ${average}</p>`;
    answer.innerHTML += `<p>O aluno foi ${define_status(average)}</p>`;
    answer.style.display = "block";
  }
}
