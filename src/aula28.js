window.onload = function(){
  /* Realizando uma busca de CEP */
  //http://api.postmon.com.br/v1/cep/*cep_a_consultar*



  var links = document.getElementsByClassName("abrePagina");
  var ajax = new XMLHttpRequest();
  var frmBuscaCep = document.getElementById("frmBuscaCep");
  var inputCep = document.getElementById("inputCep");
  var divRetorno = document.getElementById("retorno");

  ajax.onreadystatechange = function(){
    // 4 = requisicao finalizada 200 = requisicao bem sucedida
    if(ajax.readyState == 4 && ajax.status == 200) {
      var data = JSON.parse(ajax.responseText);

      console.log(ajax.responseText);
      console.log(data);


      divRetorno.innerHTML = "Logradouro: " + data.logradouro + "/" + data.bairro;

    }
  };

  frmBuscaCep.onsubmit = function(){
    if(inputCep.value === "" || inputCep.value.length !== 8) {
      alert("Informe o CEP corretamente!");
      return false;
    }


    ajax.open("GET", "http://api.postmon.com.br/v1/cep/"+inputCep.value, true);
    ajax.send();

    return false;
  };





};
