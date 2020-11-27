var wall1, car, wall;
var speed, weight;
var car1, car2, car3, car4;
var quality, q1, q2, q3;

function preload() {
  wall1= loadImage("wall.jpg");
  car4=loadImage("gcar.png");
  car1=loadImage("pcar.png");
  car2=loadImage("ocar.png");
  car3=loadImage("greencar.png");
  q3=loadImage("accepted.png");
  q1=loadImage("approved.png");
  q2=loadImage("rejected.png");
}

function setup() {
  createCanvas(1000,800);
  quality=createSprite(100,200);
  quality.visible=false;
  quality.scale=0.5;

  wall=createSprite(1000,200,50,80);
  wall.scale=2;
  wall.addImage(wall1);

  car=createSprite(0,200);
  speed=random(55,180);
  weight=random(400,3000);

  if(speed>55 && speed<65){
    car.addImage(car1);
      }

      if(speed>65 && speed<75){
        car.addImage(car2);
          }

          if(speed>75 && speed<85){
            car.addImage(car3);
              }

              if(speed>90){
                car.addImage(car4);
                  }

                  car.velocityX=speed;


}

function draw() {
  background(255,255,255);
  if(wall.x-car.x<(wall.width+car.width)/2) {
    car.velocityX=0;
    quality.visible=true;

    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      quality.addImage(q2);
    }

if(deformation>100){
  quality.addImage(q3);
}

if(deformation<100){
  quality.addImage(q1);
}

  } 
  drawSprites();
}