const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(300,200),15, true, "yellow");
let B = new Point(new Vector2d(600,700),15, true, "blue");
let C = new Point(new Vector2d(800,100),15, true, "red");
let D = new Point(new Vector2d(600,700),10, false, "black");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

function animate(){
  requestAnimationFrame(animate);
    context.clearRect(0, 0, width, height);

    l.defineLineByTwoPoints(A,B);
    l.draw(context);

    m.slope = -1 / l.slope;
    m.intercept= C.position.dy- m.slope * C.position.dx;
    m.draw(context);

    D.position.dx = (m.intercept - l.intercept)/(l.slope - m.slope);
    D.position.dy = (m.slope * D.position.dx + m.intercept );
    D.draw(context);



    A.draw(context);
    B.draw(context);
    C.draw(context);

    context.beginPath();
    context.moveTo(A.position.dx, A.position.dy);
    context.lineTo(B.position.dx, B.position.dy);
    context.lineTo(C.position.dx, C.position.dy);
    context.lineTo(A.position.dx, A.position.dy);
    context.closePath();
    context.stroke();


    }

animate();
