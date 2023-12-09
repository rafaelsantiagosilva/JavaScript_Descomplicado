// Declaração de variáveis
let answer = document.getElementById("answer");

// Declaração de strings
let name_user = document.getElementById("name");
let brand = document.getElementById("brand");
let model = document.getElementById("model");

// Declaração de anos
let year_birth = document.getElementById("year_birth");
let year_fabrication = document.getElementById("year_fabrication");
let current_year = new Date();
current_year = current_year.getFullYear();

// Idade
let age = Number(current_year.value) - Number(year_birth.value);

// Sexo
let male = document.getElementById("male");
let female = document.getElementById("female");
let gender = [male, female];

// Outros números
let vehicle_price = document.getElementById("vehicle_price");
let bonus_percent = document.getElementById("bonus_percent");

// Função para a verificação do nome
function name_verification() {
  let error = false;
  if (!isNaN(name_user.value)) {
    error = true;
  } else if (
    name_user.value === null ||
    name_user.value === undefined ||
    name_user.value.trim() === ""
  ) {
    error = true;
  }

  if (error) {
    alert("ERRO: Verifique o campo de NOME e tente novamente!");
  }

  return !error;
}

//Função para verificar a idade
function age_verification() {
  let error = false;

  if (age < 18) {
    error = true;
  }

  if (error) {
    alert("ERRO: É necessário ter 18 anos ou mais!");
  }

  return !error;
}

// Função para verificar o sexo
function gender_verification() {
  let error = false;

  if (!male.checked && !female.checked) {
    error = true;
  }

  if(error){
     alert('ERRO: Preencha o campo de sexo!');
  }
  return !error;
}

// Função para verificação de marca
function brand_verification() {
  let error = false;
  if (!isNaN(brand.value)) {
    error = true;
  } else if (
    brand.value === null ||
    brand.value === undefined ||
    brand.value.trim() === ""
  ) {
    error = true;
  }

  if (error) {
    alert("ERRO: Verifique o campo de MARCA e tente novamente!");
  }

  return !error;
}

// Função para a verificação de modelo
function model_verification() {
  let error = false;
  if (!isNaN(model.value)) {
    error = true;
  } else if (
    model.value === null ||
    model.value === undefined ||
    model.value.trim() === ""
  ) {
    error = true;
  }

  if (error) {
    alert("ERRO: Verifique o campo de MODELO e tente novamente!");
  }

  return !error;
}

// Função para a verificação de anos
function year_verification(year) {
  let error = false;
  if (
    year.value === null ||
    year.value === undefined ||
    year.value.trim() === ""
  ) {
    error = true;
  } else {
    if (isNaN(year.value)) {
      error = true;
    } else if (year.value < 1901 || year.value > Number(current_year)) {
      error = true;
    } else if (Number(year.value).toFixed(0) - year.value != 0) {
      error = true;
    }
  }

  if (error) {
    alert("ERRO: Verifique os campos de ANO e tente novamente!");
  }

  return !error;
}

//Função para a verificação de preço
function vehicle_price_verification() {
  let error = false;

  if (
    vehicle_price.value === undefined ||
    vehicle_price.value === null ||
    vehicle_price.value.trim() === ""
  ) {
    error = true;
  } else {
    if (isNaN(vehicle_price.value)) {
      error = true;
    } else if (vehicle_price <= 0) {
      error = true;
    }
  }

  if (error) {
    alert("ERRO: Verifique o campo de PREÇO e tente novamente!");
  }

  return !error;
}

// Função para a verificação do bônus
function bonus_percent_verification() {
  let error = false;

  if (
    bonus_percent.value === undefined ||
    bonus_percent.value === null ||
    bonus_percent.value.trim() === ""
  ) {
    error = true;
  } else {
    if (isNaN(bonus_percent.value)) {
      error = true;
    } else if (bonus_percent.value < 0 || bonus_percent.value > 25.0) {
      error = true;
    }
  }

  if (error) {
    alert("ERRO: Verifique o campo de BÔNUS e tente novamente!");
  }

  return !error;
}

// Função para calcular a apólice
function calculate_policy() {
  if (
    name_verification() &&
    year_verification(year_birth) &&
    age_verification() &&
    gender_verification() &&
    brand_verification() &&
    model_verification() &&
    year_verification(year_fabrication) &&
    vehicle_price_verification() &&
    bonus_percent_verification()
  ) {
    let policy_percent = 0;
    let policy = 0;

    if (Number(year_fabrication.value) >= 2010) {
      policy_percent = 0.0125;
    } else if (
      Number(year_fabrication.value) <= 2009 &&
      Number(year_fabrication.value) >= 2000
    ) {
      policy_percent = 0.0175;
    } else if (
      Number(year_fabrication.value) <= 1999 &&
      Number(year_fabrication.value) >= 1980
    ) {
      policy_percent = 0.02;
    } else if (Number(year_fabrication) < 1980) {
      policy_percent = 0.025;
    }

    policy = Number(vehicle_price.value) * policy_percent;

    if (female.checked) {
      policy -= policy * 0.1;
    } else {
      policy += policy * 0.05;
    }

    if (age < 30 || age > 60) {
      policy += policy * 0.2;
    }

    policy -= policy * (Number(bonus_percent.value) / 100);

    answer.innerHTML = `<p>O preço final da apólice é de R$${policy.toFixed(2).replace('.', ',')}</p>`;
    answer.style.display = "block";

    return policy;
  }
}
