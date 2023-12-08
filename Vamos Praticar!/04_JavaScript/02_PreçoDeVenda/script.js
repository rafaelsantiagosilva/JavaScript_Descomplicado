// Declaração das variáveis
let answer = document.getElementById('answer');
let unit_price = document.getElementById('unit_price');
let quantity = document.getElementById('quantity');
let discount = document.getElementById('discount');

// Verificando os dados do preço unitário
function unit_price_verification() {
     let error = false;

     // Verificando erros de nulo, indefinido ou sem nada digitado
     if (unit_price.value === null || unit_price.value === undefined || unit_price.value.trim() === "") {
          error = true;
     } else {
          // Verificando se não é um número
          if (isNaN(unit_price.value)) {
               error = true;

          // Verificando se é negativo ou igual a zero
          } else if (Number(unit_price.value) <= 0) {
               error = true;
          } 
     }

     if (error) {
          alert('Confira os dados do campo de preço e tente novamente!');
     }

     return (!error);
}

function quantity_verification() {
     let error = false;

     if (quantity.value === null || quantity.value === undefined || quantity.value.trim() === "") {
          error = true;
     } else {
          if (isNaN(quantity.value)) {
               error = true;

          // Verificando se é número racional
          } else if (Number(quantity.value) - Number(quantity.value).toFixed(0) != 0) {
               error = true;
          } else if (Number(quantity.value) <= 0 || Number(quantity.value) > 999) {
               error = true;
          } 
     }

     if (error) {
          alert('Confira os dados do campo de quantidade e tente novamente!');
     }

     return (!error);
}

function discount_verification() {
     let error = false;

     if (discount.value === null || discount.value === undefined || discount.value.trim() === "") {
          error = true;
     } else {
          if (isNaN(discount.value)) {
               error = true;
          } else if (Number(discount.value) < 0 || Number(discount.value) > 100) {
               error = true;
          } 
     }

     if (error) {
          alert('Confira os dados do campo de desconto e tente novamente!');
     }

     return (!error);
}

function calculate_selling_price() {
     if (unit_price_verification() && quantity_verification() && discount_verification()) {
          final_price = Number(unit_price.value) * Number(quantity.value);
          final_price = final_price - final_price * (Number(discount.value) / 100);
          final_price = final_price.toFixed(2),
          final_price = final_price.replace('.', ',');

          answer.innerHTML = `O preço final é R$${final_price}`;
          answer.style.display = 'block';

          return final_price;
     }
}