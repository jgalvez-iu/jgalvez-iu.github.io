let mic;//Crea una variable pel micròfon
function setup() {
  createCanvas(600,400);
  mic=new p5.AudioIn();//El micròfon es una entrada de audio amb p5
  mic.start()//Activar el micròfon
  //mouseX=300 MouseY=200
}


function draw() {
  let vol=mic.getLevel();
  let h=map(vol,0,1,0,1000);
  background(0-mouseX*1,100+mouseY*1,100);//color fons
  //Fill fa referencaia als numeros dels colors es representen en html amb: RGB. El primer numero fa referencaia al vermell (R=Red), el segon numero a verd (G=Green), i el tercer color a blau (B=Blue).
  fill(239,245,91)//color cara
  ellipse(mouseX,mouseY,200+h-mouseX/10,250+h-mouseY/2);//cara
  //Per colocar figures, utilitzem cordenades (x,y) que ens donen la posició del centre de l'ellipse. El primer numero es la distància i el secon numero és l'alçada. El punt 0 de les cordenades és la cantonada esquerra d'adalt. El tercer numero és l'alçada de l'ellipse i el quart numero l'alcada de l'ellipse.
  fill(255-mouseX/2,255-mouseY/2,255)//color ull esquerra
  ellipse(mouseX-50,mouseY-50,50,25)//ull esquerra
  fill(255-mouseX/2,255-mouseY/2,255)//color ull dret
  ellipse(mouseX+50,mouseY-50,50,25)// ull dret
  fill(200,40,100+h*-10)//color boca
  arc(mouseX,mouseY+50,50+h*3,100+h,0,PI)//boca
  fill(0,0,0)//color nineta
  ellipse(mouseX+50,mouseY-50,10,15)//nineta dreta
  fill(0,0,0)//color nineta esquerra
  ellipse(mouseX-50,mouseY-50,10,15)//nineta esquerra
  line(mouseX+30,mouseY-70,mouseX+70,mouseY-80)
  line(mouseX-30,mouseY-70,mouseX-70,mouseY-80)
strokeWeight(4)
}
