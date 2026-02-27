let mic;//Crea una variable pel micròfon
function setup() {
  createCanvas(600, 400);
  mic=new p5.AudioIn();//El micròfon es una entrada de audio amb p5
  mic.start()//Activar el micròfon
}


function draw() {
  let vol=mic.getLevel();
  let h=map(vol,0,1,0,1000);
  background(0,100,100);//color fons
  //Fill fa referencaia als numeros dels colors es representen en html amb: RGB. El primer numero fa referencaia al vermell (R=Red), el segon numero a verd (G=Green), i el tercer color a blau (B=Blue).
  fill(239,245,91)//color cara
  ellipse(300,200,200+h,250+h);//cara
  //Per colocar figures, utilitzem cordenades (x,y) que ens donen la posició del centre de l'ellipse. El primer numero es la distància i el secon numero és l'alçada. El punt 0 de les cordenades és la cantonada esquerra d'adalt. El tercer numero és l'alçada de l'ellipse i el quart numero l'alcada de l'ellipse.
  fill(255,255,255)//color ull esquerra
  ellipse(250,158,50,25)//ull esquerra
  fill(255,255,255)//color ull dret
  ellipse(343,158,50,25)// ull dret
  fill(200,40,100+h)//color boca
  arc(300,250,50+h*3,100+h*3,0,PI)//boca
  fill(0,0,0)//color nineta
  ellipse(343,158,10,15)//nineta dreta
  fill(0,0,0)//color nineta esquerra
  ellipse(250,158,10,15)//nineta esquerra
  line(270,145,225,140)
  line(320,145,365,140)
strokeWeight(4)
}
