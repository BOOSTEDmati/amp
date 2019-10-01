class Point {
  constructor(position, radius, draggable){
    this.position = position;
    this.radius = radius;
    this.draggable = false || draggable;

    if(this.draggable){
      this.drag();
    }
  }


    draw(context){
      context.beginPath();
      context.strokeStyle = "rgb(0, 0, 255)";
      context.fillStyle = "rgb(10, 23, 66)";
      context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
      context.stroke();
      context.fill();
      context.closePath();
    }

    changecolor(){
      console.log("ïk ben hier gekomen");
      context.fillStyle = "rgb(44,210,200)";
    }

    drag(){
      var dragging = false;

      window.addEventListener('mousedown', (e)=>{
        let difference = new Vector2d(0, 0);
        let mouse = new Vector2d(i.clientX, e.clientY);
        difference.differenceVector(this.position, mouse);

        if(difference.magnitude < this.radius){
          dragging = true;
          console.log("hey nmr 1");
        }
      })

      window.addEventListener('mousemove', (e)=>{
        if(dragging){
          this.position.dx = e.clientX;
          this.position.dy = e.clientY;
        }
        let difference = new Vector2d(0, 0);
console.log("hey nmr 2");
      })

      window.addEventListener('mouseup', (e)=>{
        dragging = false;
        console.log("hey nmr 3");
      })
    }
}
