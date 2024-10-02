function verificar(){
  let entrada = document.querySelector('#entrada');
  let saida = document.querySelector('#saida');

  if(entrada.value.length == 0){
    alert('Digita alguma coisa ai meu fi');
  }else{
    let valor = Number(entrada.value);
    saida.innerHTML = '';

    for(let c = 1; c <= 10; c++){
      let opt = document.createElement('option');
      opt.text += `${valor} x ${c} = ${valor * c}`;
      saida.appendChild(opt);
    }
  }
}