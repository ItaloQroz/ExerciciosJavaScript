function media() {
  let numerototal = parseFloat(0);
  let i = (0);
  let n = parseInt(0);




  while (i<=100){
    let n = parseInt(prompt("Digite um Numero"));
    

    if (n % 2 == 0) {
      numerototal = numerototal + n;
        i = i +1
    }
     if (n == 0) {
      alert("Saindo Da Sessão");
      break;
    }

  }

  alert("o Valor A média Aritmética é = " + numerototal / (i - 1));
  
  console.log(i)
}
