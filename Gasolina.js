function CalculoLitros(){

    if(document.getElementById("TempGasto").value==""){
        alert("O prenchimento é Obrigatorio");
        document.getElementById("TempGasto").focus(); //manda o cursor pra dentro do campo
        return;

    }
    if(document.getElementById("Distancia").value==""){
        alert("O prenchimento é Obrigatorio");
        document.getElementById("Distancia").focus(); //manda o cursor pra dentro do campo
        return;

    }

 let tempo= document.getElementById("TempGasto").value;
 let distancia =(tempo * distancia);
 let velocidade = document.getElementById("VeloMedia").value;
 let litros =(distancia / 12);

 document.getElementById("Distancia")


}
