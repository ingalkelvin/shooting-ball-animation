function Ball(radius, color){

	if(radius == undefined){
		radius = 40;
	}
	
	if (color == undefined){
		color = "lightblue";
	}
	
	this.x = 0;
	this.y = 0;
	this.vx=0;
	this.vy=0;
	this.radius = radius;
	this.color = color;
	
}

Ball.prototype.draw = function (context){
	
	context.save();
	context.translate(this.x, this.y);
	context.fillStyle = this.color;
	context.beginPath();
	context.arc(0,0,this.radius,0,(Math.PI * 2),true);
	context.closePath();
	context.fill();
	context.restore();

}

Ball.prototype.getBounds = function() {

   return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2
   };
};