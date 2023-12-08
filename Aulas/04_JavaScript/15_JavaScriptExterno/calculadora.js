var res = document.getElementById('res');
var v1 = document.getElementById('v1');
var v2 = document.getElementById('v2');
var op = document.getElementById('op');

function String2Number(valor) {
     valor = valor.replace(",", ".");
     return (parseFloat(valor));
}

function digito(dig) {
     if (res.value.length < 12) {
          if (res.value != "0") {
               res.value = res.value + dig;
          } else {
               res.value = dig;
          }
     }
}

function separador() {
     if (res.value.indexOf(",") < 0) {
          res.value = res.value + ",";
     }
}

function limpar() {
     res.value = "0";
}

function total() {
     if (op.value === "+") {
          res.value = parseFloat(v1.value) + parseFloat(res.value);
     } else if (op.value === "-") {
          res.value = parseFloat(v1.value) - parseFloat(res.value);
     } else if (op.value === "*") {
          res.value = parseFloat(v1.value) * parseFloat(res.value);
     } else if (op.value === "/") {
          if(res.value != 0){
               res.value = parseFloat(v1.value) / parseFloat(res.value);
          } else {
               res.value = "ERRO!";
          }
          
     }
}

function operacao(ope){
     v1.value = res.value;
     op.value = ope;
     res.value = "0";
}

