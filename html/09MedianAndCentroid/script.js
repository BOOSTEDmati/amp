const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(1200,601),15, true, "yellow");
let B = new Point(new Vector2d(600,600),15, true, "blue");
let C = new Point(new Vector2d(900,202),15, true, "red");
let E = new Point(new Vector2d(600,700),10, true, "black");
let F = new Point(new Vector2d(600,700),10, false, "black");
let G = new Point(new Vector2d(100,100),10, false, "black");
// let D = new Point(new Vector2d(600,700),10, false, "black");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);
let x = new LinearFunction(1,1);
let lx = new LinearFunction(1,1);
let y = new LinearFunction(1,1);
let z = new LinearFunction(1,1);


function animate(){
  requestAnimationFrame(animate);
    context.clearRect(0, 0, width, height);

     l.defineLineByTwoPoints(A,B);
     l.draw(context);

     y.defineLineByTwoPoints(B,C);
     y.draw(context);

     x.defineLineByTwoPoints(A,C);
     x.draw(context);



     z.slope = -1/ y.slope;
     z.intercept = A.position.dy- A.position.dx * z.slope;
     z.draw(context);

     lx.slope =-1/ x.slope;
     lx.intercept = B.position.dy- B.position.dx * lx.slope;
     lx.draw(context);

     m.slope = -1 / l.slope;
     m.intercept= C.position.dy- m.slope * C.position.dx;
     m.draw(context);

     E.position.dx = (z.intercept - y.intercept)/(y.slope - z.slope);
     E.position.dy = (z.slope * E.position.dx + z.intercept );
     E.draw(context);

     F.position.dx = (m.intercept - l.intercept)/(l.slope - m.slope);
     F.position.dy = (m.slope * F.position.dx + m.intercept );
     F.draw(context);

     G.position.dx = (lx.intercept - x.intercept)/(x.slope - lx.slope);
     G.position.dy = (lx.slope * G.position.dx + lx.intercept );
     G.draw(context);


    A.draw(context);
    B.draw(context);
    C.draw(context);




    }

animate();
