function setup() {
  createCanvas(600, 400);
}

function draw() {
  let r=random(0,255);
  let g=random(0,127);
  let b=random(128,255);
  let x=random(0,50);
  frameRate(5);
  let y=50*noise(0,05*frameCount);
  background(0+r,100,100);//color fons
  //Fill fa referencaia als numeros dels colors es representen en html amb: RGB. El primer numero fa referencaia al vermell (R=Red), el segon numero a verd (G=Green), i el tercer color a blau (B=Blue).
  fill(239-g/3,245,91)//color cara
  ellipse(300-x,200,200+y,250+y);//cara
  //Per colocar figures, utilitzem cordenades (x,y) que ens donen la posició del centre de l'ellipse. El primer numero es la distància i el secon numero és l'alçada. El punt 0 de les cordenades és la cantonada esquerra d'adalt. El tercer numero és l'alçada de l'ellipse i el quart numero l'alcada de l'ellipse.
  fill(255,255,255)//color ull esquerra
  ellipse(250-x,158,50+y,25+y)//ull esquerra
  fill(255,255,255)//color ull dret
  ellipse(343-x,158,50+y,25+y)// ull dret
  fill(200,40,100)//color boca
  arc(300-x,250,75,50+b/3,0,PI)//boca
  fill(0,0,0)//color nineta
  ellipse(343-x,158,10,15)//nineta dreta
  fill(0,0,0)//color nineta esquerra
  ellipse(250-x,158,10,15)//nineta esquerra
}
