/*

var botao = document.querySelector('.btn');

botao.addEventListener('click', function () {

  var cor1 = document.getElementById("conteudo-1");
  var cor2 = document.getElementById("conteudo-2");
  var cont = document.getElementById("conteudo-10");
  var conteudo = document.getElementById("conteudo-0");
  
    if (cor1.className === 'conteudo1') {
      cor1.className = "cont1";
      cor2.className = "cont2";
      conteudo.style.height = "650px";
      cont.style.gridTemplateColumns = "repeat(3, 1fr)";
    } else {
      cor1.className = "conteudo1";
      cor2.className = "conteudo2";
      conteudo.style.height = "570px";
      cont.style.gridTemplateColumns = "repeat(4, 1fr)";
    }
})

*/

///////////////////////////////////////////////////////////////////////////////////////////

var botao = document.querySelector('.btn');

botao.addEventListener('click', function () {

  let tam = document.querySelectorAll('div.conteudo1');
  
    for(let i = 0; i < tam.length; i++){
      if(tam[i].style.backgroundColor == "yellow"){
        tam[i].style.backgroundColor = "red";
        /*tam[i].style.height = "100px";
        tam[i].style.width = "140px";
        tam[i].className = "cont1";*/
      } else {
        tam[i].style.backgroundColor = "yellow";
        /*tam[i].style.height = "150px";
        tam[i].style.width = "190px";
        tam[i].className = "conteudo1";*/
      };
  };
  
  var cont = document.querySelectorAll('div.conteudo-10');
  
  if(cont == 'repeat(4, 1fr)'){
    cont.style.gridTemplateColumns = 'repeat(4, 1fr)';
  } else {
    cont.style.gridTemplateColumns = 'repeat(3, 1fr)';
  }
});