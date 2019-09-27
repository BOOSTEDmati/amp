const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


function getRandom(max){
  return Math.floor(Math.random()*max);
}

let points = [];

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);


  let A = new Point(new Vector2d(getRandom(width),getRandom(height)),10);
points.push(A);
//A.draw(context);

for(let i = 0; i<points.length;i++){
  points[i].radius += 1;
  points[i].draw(context)
  if(points[i].radius > 400){
    points.splice(i,1);
  }
}

}

animate();

// function animate(){
//   requestAnimationFrame(animate);
//   let A = new Point(new Vector2d(getRandom(width),getRandom(height)));
//   A.draw(context);
