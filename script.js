function verificar() {
  let entrada = document.querySelector("#entrada");
  let saida = document.querySelector("#saida");

  if (entrada.value.length == 0) {
    window.alert("Digite algo!");

  } else {
    let valor = Number(entrada.value);
    saida.innerHTML = '';

    for (let c = 1; c <= 10; c++) {
      let opt = document.createElement("option");
      opt.text = `${c} x ${valor} = ${c * valor}`;
      
      opt.value = `saida${c}`; // Identifica cada opção com um valor
      
      saida.appendChild(opt)
    }
  }
}
