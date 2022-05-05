//Imagens e Sons do Jogo
let estrada;
let ator;
let carro1;
let carro2;
let carro3;

//Sons do Jogo
let trilha;
let colisaoComCarro;
let pontos;

function preload(){
  estrada = loadImage("imagens/estrada.png");
  ator = loadImage("imagens/ator-1.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3= loadImage("imagens/carro-3.png");
  carros = [carro1, carro2 ,carro3, carro1 , carro2, carro3]
  
  trilha = loadSound("sons/trilha.mp3");
  pontos = loadSound("sons/pontos.wav");
  colisaoComCarro = loadSound("sons/colidiu.mp3");
  
}