const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(300,200),15, true);
let B = new Point(new Vector2d(500,300),15, true);
// let C = new Point(new Vector2d(600,500),15, true);
// let D = new Point(new Vector2d(400,100),15, true);

A.draw(context);
B.draw(context);

let l = new LinearFunction(1/3, 133.3);




function animate(){
  requestAnimationFrame(animate);
    context.clearRect(0, 0, width, height);

    for (let x = 0; x < width; x+=10){
      let P = new Point(new Vector2d(x,l.calcY(x)),5);
      let  = new Point(new Vector2d(x,l.calcY(x)),5);
      P.draw(context);
    }

    A.draw(context);
    B.draw(context);
    // C.draw(context);
    // D.draw(context);

    l.defineLineByTwoPoints(A,B);
}

animate();
