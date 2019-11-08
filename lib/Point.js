class Point {
  constructor(position, radius, draggable, color){
    this.position = position;
    this.radius = radius;
    this.color = color || "red";
    this.draggable = false || draggable;

    if(this.draggable){
      this.drag();
    }
  }


    draw(context){
      context.beginPath();
      context.strokeStyle = "rgb(0, 0, 255)";
      context.fillStyle = this.color;
      context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
      context.stroke();
      context.fill();
      context.closePath();
    }

    drag(){
      var dragging = false;

      window.addEventListener('mousedown', (e)=>{
        let difference = new Vector2d(0, 0);
        let mouse = new Vector2d(e.clientX, e.clientY);
        difference.differenceVector(this.position, mouse);

        if(difference.magnitude < this.radius){
          dragging = true;
        }
      })

      window.addEventListener('mousemove', (e)=>{
        if(dragging){
          this.position.dx = e.clientX;
          this.position.dy = e.clientY;
        }
        let difference = new Vector2d(0, 0);
      })

      window.addEventListener('mouseup', (e)=>{
        dragging = false;
      })
    }
}
