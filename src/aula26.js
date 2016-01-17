window.onload = function(){
  /* trabalhando com ajax */
  var ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function(){
    // 4 = requisicao finalizada 200 = requisicao bem sucedida
    if(ajax.readyState == 4 && ajax.status == 200) {
      document.getElementById("retorno").innerHTML = ajax.responseText;
    }
  };

  ajax.open("GET", "src/aula26_informacoes.txt", true);
  ajax.send();

};
