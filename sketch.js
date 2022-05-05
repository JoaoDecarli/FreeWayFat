function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(estrada);
  mostraAtor();
  mostraCarro();
  movCarro();
  movAtor();
  voltaCarro();
  passouATela();
  verfColi();
  incluiPontos();
  marcaPonto();
}

