//Codigo do Ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(ator, xAtor, yAtor, 30, 30);
}

function movAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
  if (podeSeMover()){ 
  yAtor += 3;
    } 
  }
}

function verfColi(){
  for (let i = 0; i < carros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros [i], compCarro, altCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      colisaoComCarro.play();
      if (pontosMaiorQueZero ()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,100,155))
  text(meusPontos, width / 5, 27);
  
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    pontos.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}