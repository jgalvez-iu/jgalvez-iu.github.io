function setup() {
  createCanvas(600, 400);
}

function draw() {
  let sinus=sin(frameCount*0.05)*20;
  let cosinus=cos(frameCount*0,05)*20;
  let sinuscolor=sin(frameCount*0,05)*20;
  //sinus és una variable, és un nom que conté numeros que varien,
  //es a dir una variable numèrica, on guardem números que provenen
  //de la funció sinus que genera números d'entre 1 i -1. 
  //Si els números entre -1 i 1 els multiplico entre 20 i -20, no seràn aleatoris, sinó que aniràn creixent i decreixent sense parar.
  //aquesta variable la puc sumar, multiplicar dividir o canviar en qualsevol parametre de les funcions seguents.
  background(0,100,100);//color fons
  //Fill fa referencaia als numeros dels colors es representen en html amb: RGB. El primer numero fa referencaia al vermell (R=Red), el segon numero a verd (G=Green), i el tercer color a blau (B=Blue).
  fill(239+sinus,245,91)//color cara
  ellipse(300,200,200,250);//cara
  //Per colocar figures, utilitzem cordenades (x,y) que ens donen la posició del centre de l'ellipse. El primer numero es la distància i el secon numero és l'alçada. El punt 0 de les cordenades és la cantonada esquerra d'adalt. El tercer numero és l'alçada de l'ellipse i el quart numero l'alcada de l'ellipse.
  fill(255,255,255)//color ull esquerra
  ellipse(250,158+sinus,50,25)//ull esquerra
  fill(255,255,255)//color ull dret
  ellipse(343,158+sinus,50,25)// ull dret
  fill(200+sinus,40-sinus,100+sinus)//color boca
  arc(300,250,75+sinus,50,0,PI)//boca
  fill(0,0,0)//color nineta
  ellipse(343,158+sinus,10,15)//nineta dreta
  fill(0,0,0)//color nineta esquerra
  ellipse(250,158+sinus,10,15)//nineta esquerra
  
}
