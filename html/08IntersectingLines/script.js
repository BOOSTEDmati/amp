const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(300,200),15, true, "yellow");
let B = new Point(new Vector2d(600,700),15, true, "blue");
let C = new Point(new Vector2d(800,100),15, true, "red");
let D = new Point(new Vector2d(400, 500),15, true, "green");
let E = new Point(new Vector2d(600,700),10, false, "black");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

function animate(){
  requestAnimationFrame(animate);
    context.clearRect(0, 0, width, height);

    l.defineLineByTwoPoints(A,B);
    l.draw(context);



    m.defineLineByTwoPoints(C,D);
    m.draw(context);

    E.position.dx = (m.intercept - l.intercept)/(l.slope - m.slope);
    E.position.dy = (m.slope * E.position.dx + m.intercept );
    E.draw(context);



    A.draw(context);
    B.draw(context);
    C.draw(context);
    D.draw(context);

    }

animate();
