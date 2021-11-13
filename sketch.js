
var box1, box2

function setup() {
  createCanvas(600, 400);
  box1 = new Box(100,200,40,40)
  box2= new Box(300,300,25,30)
}

function draw() {
  background(220);
  box1.show()
  box1.setwidth(100)
  box2.show()
  box2.setwidth(50)
}

