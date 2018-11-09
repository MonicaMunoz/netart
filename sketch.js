function setup() {
  createCanvas(200, 300, WEBGL);
}

function draw() {
  background(0);

  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;

  ambientLight(100);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 250);

  push();
  translate(-width / 4, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  specularMaterial(250);
  box(50, 100, 100);
  pop();

  translate(width / 4, 0, 0);
  ambientMaterial(250);
  sphere(30, 30);
}
