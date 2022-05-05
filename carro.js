//Codigo do Carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let veloCarros = [2.9, 4.1, 3.10, 5.68, 2.2, 5]
let compCarro = 50;
let altCarro = 40;


function mostraCarro(){
    for (let i = 0; i < carros.length; i++){
       image(carros[i] ,xCarros[i], yCarros[i], compCarro, altCarro);
    }
}

function movCarro(){
  for (let i = 0; i < xCarros.length; i++)
  xCarros[i] -= veloCarros[i];
}

function voltaCarro(){
  for (let i = 0; i < xCarros.length; i++){
    if (passouATela(xCarros[i])){
      xCarros[i] = 600
    }
  } 
}

function passouATela(xCarros){
  return xCarros< -50;
}
