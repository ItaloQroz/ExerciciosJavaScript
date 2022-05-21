function ValorMaior(){
 let numero1 = parseFloat(prompt( "Digite o Primeiro Número: "))
 let numero2 = parseFloat(prompt( "Digite o Segundo Número: "))
 let numero3 = parseFloat(prompt( "Digite o Terceiro Número: "))
 let maior1 = parseFloat(0);
 let maior2 = parseFloat(0);
 let valor = parseFloat(0);

if (numero1 >= numero2 && numero1 >=numero3){
    maior1 = numero1
}
else if (numero2 >= numero1 && numero2 >= numero3){
    maior1 = numero2
}
else if (numero3 >= numero2 && numero3 >= numero1){
    maior1 = numero3
}

if (numero1 >= numero2 && numero1 <=numero3){
    maior2 = numero1
}
else if (numero1 <= numero2 && numero1 >= numero3){
    maior2 = numero1
}
else if (numero2 >= numero1 && numero1 >= numero3){
    maior2 = numero2
}
else if (numero2 <= numero1 && numero2 >= numero3){
    maior2 = numero3
}

