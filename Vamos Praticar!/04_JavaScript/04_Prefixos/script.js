// Declarando as variáveis
let answer = document.getElementById('answer');

// Inputs
let value = document.getElementById('value');
let prefix = document.getElementById('prefixes');

// Linhas da tabela
let lines = document.querySelectorAll('tr.prefix');

// Valores da tabela
let table_values = document.querySelectorAll('td.table_value');

// Verificando os dados do valor digitado para a conversão
function value_verification() {
     let error = false;

     if (value.value === null || value.value === undefined || value.value.trim() === "") {
          error = true;
     } else {
          if (isNaN(value.value)) {
               error = true;
          } else if (value.value < 0) {
               error = true;
          }
     }

     if (error) {
          alert('ERRO: Verifique o valor digitado e tente novamente!');
     }

     return (!error);
}

// Verificando qual linha deve sumir
function prefixes_and_lines_verification() {
     lines.forEach(line => {
          if (line.id.slice(0, 1) === prefix.value) {
               line.style.display = 'none';
          } else {
               line.style.display = 'table-row';
          }
     });

     return true;
}

// Convertendo...
function calculate_others_prefixes() {
     if (value_verification() && prefixes_and_lines_verification()) {

          // Calculando caso o prefixo seja k
          if (prefix.value === 'k') {
               for (let i in table_values) {
                    table_values[i].innerText = Number(value.value) / 10 ** (3 * i);
               }
          }

          // Calculando caso o prefixo seja m
          else if (prefix.value === 'm') {
               for (let i in table_values) {
                    if (lines[i].id === 'kilo') {
                         table_values[i].innerText = Number(value.value) * 10 ** (3 * (i + 1));
                    } else {
                         table_values[i].innerText = Number(value.value) / 10 ** (3 * (i - 1))
                    }
               }
          }

          // Calculando caso o prefixo seja g
          else if (prefix.value === 'g') {
               for (let i in table_values) {
                    if (lines[i].id === 'kilo') {
                         table_values[i].innerText = Number(value.value) * 1000000;
                    }

                    else if (lines[i].id === 'mega') {
                         table_values[i].innerText = Number(value.value) * 1000;
                    }

                    else {
                         table_values[i].innerText = Number(value.value) / 1000;
                    }
               }
          }

          // Calculando caso o prefixo seja t
          else if (prefix.value === 't') {
               let j = table_values.length - 1;
               for (let i in table_values) {
                    table_values[i].innerText = Number(value.value) * Math.pow(10, 3*j);
                    j--;
               }
          }

          answer.style.display = 'block';
     }
}