function media(){
  
  var nota1 = parseInt(document.getElementById("nt1").value);
  var nota2 = parseInt(document.getElementById("nt2").value);
  var nota3 = parseInt(document.getElementById("nt3").value);
  var nota4 = parseInt(document.getElementById("nt4").value);

  var notaFinal = (nota1 + nota2 + nota3 + nota4) /4;
  
  var elementoSomaFinal = document.getElementById("somaFinal");
  var somaFinal = "Sua nota Final é: " + notaFinal;
  elementoSomaFinal.innerHTML = somaFinal;
}




