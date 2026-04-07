function setup() {
  createCanvas(750, 750);
}

function draw() {
  background(240, 235, 225);
  
  noStroke()
  
  //Círculo chico negro
  fill(0)
  ellipse(600, 100, 100, 100)
 
  //Cículo grande rojo
  fill(220, 40, 30)
  ellipse(200, 200, 300, 300)
  
  stroke(0)
  
  //Linea gruesa
  fill(0)
  strokeWeight(60);
  line(200, 550, 500, 250, 550, 300, 250, 600)
  
  //Linea delgada larga
  fill(0)
   strokeWeight(20);
  line(250, 700, 725, 175, 750, 200, 225, 725)
   
  //Linea delgada corta
  fill(0)
  strokeWeight(20);
  line(475, 475, 700, 700, 675, 725, 450, 500)
  
  //Linea chica 1
   fill(0)
   strokeWeight(10);
  line(350, 675, 425, 590, 440, 615, 350, 690)
  
  //Linea chica 2
   fill(0)
   strokeWeight(10);
  line(540, 490, 590, 440, 600, 450, 550, 500)
  
  noStroke()
  
  //Rectangulo rojo
    fill(220, 40, 30)
  rect(650, 300, 50, 300)
  
}