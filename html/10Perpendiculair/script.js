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
let S = new Point(new Vector2d(0,0),5,false, "purple");
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

     z.slope = -1/ x.slope;
     z.intercept = G.position.dy-G.position.dx * z.slope;
     z.draw(context);

     G.position.dx = 1/2 *(A.position.dx + C.position.dx);
     G.position.dy = 1/2 *(A.position.dy + C.position.dy);
     G.draw(context);


     m.slope = -1/ y.slope;
     m.intercept = F.position.dy-F.position.dx * m.slope;
     m.draw(context);

     F.position.dx = 1/2 *(B.position.dx + C.position.dx);
     F.position.dy = 1/2 *(B.position.dy + C.position.dy);
     F.draw(context);


     lx.slope = -1/ l.slope;
     lx.intercept = E.position.dy-E.position.dx * lx.slope;
     lx.draw(context);

     E.position.dx = 1/2 *(A.position.dx + B.position.dx);
     E.position.dy = 1/2 *(A.position.dy + B.position.dy);
     E.draw(context);

     S.position.dx = z.interception(m).x;
     S.position.dy = z.interception(m).y;
     S.draw(context);


    A.draw(context);
    B.draw(context);
    C.draw(context);




    }

animate();
