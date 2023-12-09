// Declaração de variáveis
let answer = document.getElementById("answer");

// Inputs
let width = document.getElementById("width");
let height = document.getElementById("height");

// Forma geométrica
let geometric_shape = document.getElementById("geometric_shape");

// Verificando os dados da largura
function width_verification() {
  let error = false;

  if (width.value === undefined) {
    error = true;
  } else if (width.value.trim() === "") {
    error = true;
  } else {
    if (isNaN(width.value)) {
      error = true;
    } else if (width.value <= 0) {
      error = true;
    }
  }

  if (error) {
    alert("ERRO: Verifique o campo de LARGURA e tente novamente!");
  }

  return !error;
}

// Verificando os dados da altura
function height_verification() {
  let error = false;

  if (height.value === undefined) {
    error = true;
  } else if (height.value.trim() === "") {
    error = true;
  } else {
    if (isNaN(height.value)) {
      error = true;
    } else if (height.value <= 0) {
      error = true;
    }
  }

  if (error) {
    alert("ERRO: Verifique o campo de ALTURA e tente novamente!");
  }

  return !error;
}

// Verificando qual tipo de retângulo é
function retangle_verification() {
  if (Number(height.value) > Number(width.value)) {
    return 0;
  } else if (Number(width.value) > Number(height.value)) {
    return 1;
  }
}

// Verificando qual forma geométrica é
function calculate_geometric_shape() {
  if (width_verification() && height_verification()) {
    let shape_class;
    let shape_name;

    if (Number(width.value) === Number(height.value)) {
      shape_class = "square";
      shape_name = "QUADRADO";
    } else {
      shape_name = "RETÂNGULO";
      if (retangle_verification() == 0) {
        shape_class = "retangle_vertical";
      } else {
        shape_class = "retangle_horizontal";
      }
    }

    if (geometric_shape.classList.length != 0) {
      geometric_shape.removeAttribute("class");
    }
    geometric_shape.innerHTML = `<p>É um ${shape_name}</p>`;
    geometric_shape.classList.add(`${shape_class}`);
    answer.style.display = "block";

    return shape_name;
  }
}
