class Point {
  constructor(position,radius){
    this.position = position;
    this.radius = radius;
  }


    draw(context){
      context.beginPath();
      context.strokeStyle = "rgb(0,0,255)";
      context.fillStyle = "rgb(10,23,66)";
      context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
      context.stroke();
      context.fill();
      context.closePath();
    }

    changecolor(){
      console.log("ïk ben hier gekomen");
      context.fillStyle = "rgb(44,210,200)";
    }
}
