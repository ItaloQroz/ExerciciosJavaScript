function ConverterTemp(){


    if(document.getElementById("Centigrados").value==""){
        alert("O prenchimento é Obrigatorio");
        document.getElementById("Centigrados").focus(); //manda o cursor pra dentro do campo
        return;

    }

    // Pegando Valor Centigrados
    let c = document.getElementById("Centigrados").value;
    // Fazendo O Calculo De Conversão
    let f = (9 * c + 160) / 5;
    // Atribuir o Resultado ao campo do farenaiti
    document.getElementById("Fahrenheit").value=f;

    if(f > 50){
        document.getElementById("Fahrenheit").style.backgroundColor="red";  
    }
    else {
        document.getElementById("Fahrenheit").style.backgroundColor="blue";  
    }


}