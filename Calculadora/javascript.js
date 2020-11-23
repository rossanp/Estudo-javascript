function calc(){
  let valor1 = document.getElementById('valor-1').value;
  let valor2 = document.getElementById('valor-2').value;
  let sinal = document.getElementById('sinal').value;
  let resultado = parseInt(valor1)+parseInt(valor2);
  //document.write(sinal);
    
  switch (sinal) {
  case "soma":
    document.getElementById("result").innerHTML = "A soma é " + resultado + ".";
    break;
  case "sub":
    day = "Monday";
    break;
  case "mult":
     day = "Tuesday";
    break;
  case "div":
    day = "Wednesday";
    break;
  case "porc":
    day = "Thursday";
    break;
  default:
    day = "Friday";
  }
}
