function BathTub()
			{
				this.x = 0; 
				this.y = 0;
				this.color = "green";
				this.rotation = 0;
				this.width=570;
				this.height=140;
			}	


			BathTub.prototype.draw = function(context) {
	
				context.save();
				context.translate(this.x, this.y);
				context.rotate(this.rotation);
				context.lineWidth = 2;

				context.fillStyle = "yellow";
				context.beginPath();

				context.moveTo(-300, -140);
				context.lineTo(300, -140);
				context.lineTo(300, -120);
				context.lineTo(270, -120);
				context.lineTo(150, 50);

				context.lineTo(-200, 50);
				context.lineTo(-300, -120);
				

				context.lineTo(-300, -140);

				context.moveTo(290, -140);
				context.lineTo(280, -190);
				context.lineTo(250, -220);
				context.lineTo(250, -190);
				context.lineTo(270, -190);
				context.lineTo(270, -140);

	
				
				context.closePath();
				context.fill();
				context.stroke();

				context.fillStyle = "brown";
				context.beginPath();

				//context.moveTo(0, 0);
				

				context.closePath();	
				context.fill();
				context.stroke();
				context.restore();
			}


		function Door(){
				this.x=0;
				this.y=0;
				this.color="brown";
				this.width=220;
				this.height=450; 
		}
		Door.prototype.draw = function(context){
				context.save();
			
				context.lineWidth = 2;
				context.translate(this.x, this.y);
				context.fillStyle = "brown";
				context.beginPath();
				context.moveTo(0,0);
				context.lineTo(-110, 0);
				context.lineTo(-110, 450);
				context.lineTo(110, 450);
				context.lineTo(110, 0);
				context.lineTo(0, 0);
				context.closePath();
				context.fill();
				context.stroke();
				
				context.fillStyle = "red";
				context.beginPath();
				context.arc(60,200,10,0,(Math.PI*2),true);
				context.closePath();

				context.fill();
				context.stroke();
				
				context.restore();
			};
