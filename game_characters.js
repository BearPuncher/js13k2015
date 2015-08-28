var player = {
	isDown: true,
	x: 120,
	y: 270,
	draw: function() {
		ctx.beginPath();
		ctx.arc(player.x,player.y,30,0,2*Math.PI);
		ctx.stroke();
	},
	reverse: function() {
		player.isDown = !player.isDown;
		if (player.isDown) {
			player.y = floor_y;
		} else {
			player.y = ceil_y
		} 
	}
};

ceil_y = 180
floor_y = 270

//-------------- Enimies ------------------

var Blocker = function(xStart) {
	console.log("creating");
	this.swap = false;
	this.width = 50;
	this.x = xStart; 
	this.y = actualHeight / 2,
	this.draw = function() {
		if (this.swap) {
			ctx.fillStyle = "#009900";
    		ctx.fillRect(this.x,this.y-this.width,
    			this.width,this.width);
		} else {
			ctx.clearRect(this.x,this.y-this.width,
				this.width,this.width);
		}
	};
	this.update = function(speed) {
		this.x += 10 * speed
		if (this.x > actualWidth) {
			this.x = 0;
			this.swap = !this.swap;
		} else if (this.x < -this.width) {
			this.x = actualWidth;
			this.swap = !this.swap;
		}

		if (this.swap) {
			this.y = actualHeight;
		} else {
			this.y = actualHeight / 2
		}

	};
};

//------------- GameController -----------------

var GameController = {
	blockers: [new Blocker(150),new Blocker(250)],
	draw: function() {
		for (var b in this.blockers) {
		  this.blockers[b].draw();
		}
	},
	update: function() {
		for (var b in this.blockers) {
		  this.blockers[b].update(gameSpeed / 100);
		}
	}
}
