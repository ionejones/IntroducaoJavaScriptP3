function somar() {
    var numeroa = 0;
    var numerob = 0;
    var numero1 = document.getElementById('numero1');
     numeroa = parseInt(numero1.value);
    
    var numero2 = document.getElementById('numero2');
     numerob = parseInt(numero2.value); 

     var texto = document.getElementById("mensagem");

     
    var resultado = numeroa + numerob;
    
    

    mensagem = "Os números " + numeroa + " e " + numerob

    numeroa == numerob ? mensagem = mensagem +  " são iguais " : mensagem = mensagem +  " são diferentes "
    mensagem = mensagem + ", sua soma é " + resultado

     resultado > 10 ? mensagem = mensagem + " e é maior do que 10 " : mensagem = mensagem + " e é menor do que 10 ";
     resultado > 20 ? mensagem = mensagem + " e é maior do que 20 " : mensagem = mensagem + " e é menor do que 20 ";

    texto.innerHTML = mensagem;
}