window.onload = function(){
  /* trabalhando com ajax */
/*  var ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function(){
    // 4 = requisicao finalizada 200 = requisicao bem sucedida
    if(ajax.readyState == 4 && ajax.status == 200) {
      document.getElementById("retorno").innerHTML = ajax.responseText;
    }
  };

  ajax.open("GET", "src/aula26_informacoes.txt", true);
  ajax.send(); */

  var links = document.getElementsByClassName("abrePagina");
  var ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function(){
    console.log(ajax.status);
    console.log(ajax.readyState);
    // 4 = requisicao finalizada 200 = requisicao bem sucedida
    if(ajax.readyState == 4 && ajax.status == 200) {
      document.getElementById("retorno").innerHTML = ajax.responseText;
    }
  };

  for(var i = 0; i < links.length; i++) {
    links[i].onclick = function(evento){
      evento.preventDefault();
      ajax.open("GET", this.getAttribute("href"), true);
      ajax.send();
      return false;
    };
  }

  function ajaxAbrePagina(url){



  };

};
