

var polys = [];
var xoff = 0;
var angle = 75;
var delta = 10;

var deltaSlider;
var angleSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //angleMode(DEGREES);
  background(0);
 // deltaSlider = createSlider(0, 25, 10);
 // angleSlider = createSlider(0, 90, 75);

  var inc = 100;
  for (var x = 0; x < width; x += inc) {
    for (var y = 0; y < height; y += inc) {
      var poly = new Polygon(6);
      poly.addVertex(x, y);
      poly.addVertex(x + inc, y);
      poly.addVertex(x + inc, y + inc);
      poly.addVertex(x, y + inc);
      poly.close();
      polys.push(poly);
    }
  }
}

function draw() {
  background(0);
//  angle = angleSlider.value();

 //angle = map(mouseX,0,width,0,75);
 //delta = map(mouseY,0,height,0,200);
 
 var x = map(noise(xoff),0,1,0,100);
 var y = map(noise(xoff),0,1,0,100);
 xoff +=0.01;
 angle = x;
 delta = y;
//angle = map(noise(xoff),0,1,10,75);
//delta = map(noise(xoff),0,1,3,10); 
  //delta = deltaSlider.value();
  //console.log(angle, delta);
  for (var i = 0; i < polys.length; i++) {
    polys[i].hankin();
    polys[i].show();
  }
  //noLoop();
}
