// Declarando os inputs
let inputs = document.querySelectorAll('input.inp_num');

// Função que verifica se os valores digitados são números
function verification(input) {
     if (isNaN(input.value)) {
          return false;
     } else {
          return true;
     }
}

// Função que calcula a média
function calculate() {

     // Variáveis da função
     let numbers = new Array();
     let error = false;
     let mean = 0;

     // Verificando e usando os inputs
     inputs.forEach(element => {

          // Verificando se o valor do input é um número
          if (!verification(element)) {
               alert('Preencha os dados corretamente!');
               error = true;
          } 
          
          // Somando na variável média 
          else {
               numbers.push(Number(element.value));
               mean += Number(element.value);
          }
     });

     // Verificando se todos são números para mostrar a resposta
     if (!error) {
          mean /= numbers.length;

          let answer = document.getElementById('answer');
          answer.style.display = 'block';

          // Mostrando a resposta
          answer.innerHTML = `<p>A média é ${mean}</p>`;
          return mean;
     }
}