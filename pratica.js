function verificar(){
  let entrada = document.querySelector('#entrada');
  let saida = document.querySelector('#saida');

  if(entrada.value.length == 0){
    alert('Digite algum valor');
  }else{
    let e = Number(entrada.value);
    saida.innerHTML = ''
    
    for(let t = 1; t <= 10; t++){
      let opt = document.createElement('option');
      opt.innerHTML += `${e} x ${t} = ${e*t}`;
      saida.appendChild(opt);
    }
  }
}