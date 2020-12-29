function calc(){
  let valor1 = document.getElementById('valor-1').value;
  let valor2 = document.getElementById('valor-2').value;
  let sinal = document.getElementById('sinal').value;
  let resultado;
  //document.write(sinal);
    
  switch (sinal) {
  case "soma":
    document.getElementById("result").innerHTML = "A soma é " + (resultado = parseInt(valor1)+parseInt(valor2)) + ".";
    break;
  case "sub":
    document.getElementById("result").innerHTML = "A subtração é " + (resultado = parseInt(valor1)-parseInt(valor2)) + ".";
    break;
  case "mult":
     document.getElementById("result").innerHTML = "A multiplicação é " + (resultado = parseInt(valor1)*parseInt(valor2)) + ".";
    break;
  case "div":
    document.getElementById("result").innerHTML = "A divisão é " + (resultado = parseInt(valor1)/parseInt(valor2)) + ".";
    break;
  case "porc":
    document.getElementById("result").innerHTML = "A porcentagem é " + (resultado = (parseInt(valor2 * valor1) / 100)) + ".";
    break;
  default:
    document.getElementById("result").innerHTML = "Valores incorretos.";
  }
}

/* porcento: (valor2 * valor1) / 100 */