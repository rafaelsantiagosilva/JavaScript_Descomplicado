// Declarando variáveis
let answer = document.getElementById('answer');
let voltage = document.getElementById('voltage');
let eletric_current = document.getElementById('eletric_current');

function voltage_verification() {
     let error = false;

     if (voltage.value === null || voltage.value === undefined || voltage.value.trim() === "") {
          error = true;
     } else if (isNaN(voltage.value)) {
          error = true;
     }

     if(error){
          alert('ERRO: Verifique os dados da tensão elétrica e tente novamente!');
     }

     return(!error);
}

function eletric_current_verification() {
     let error = false;

     if (eletric_current.value === null || eletric_current.value === undefined || eletric_current.value.trim() === "") {
          error = true;
     } else if (isNaN(eletric_current.value)) {
          error = true;
     } else if (eletric_current.value == 0) {
          error = true;
     }

     if(error){
          alert('ERRO: Verifique os dados da corrente elétrica e tente novamente!');
     }

     return(!error);
}

function calculate_conductor_resistance() {
     if (voltage_verification() && eletric_current_verification()) {
          let conductor_resistance = Number(voltage.value) / Number(eletric_current.value);
          conductor_resistance = conductor_resistance.toFixed(2);
          conductor_resistance = conductor_resistance.replace('.', ',')
          answer.innerHTML = `<p>A intensidade da resistência do condutor é de ${conductor_resistance}\u03A9</p>`;
          answer.style.display = 'block';
     }
}