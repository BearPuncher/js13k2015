var player = {
	isDown: true,
	x: 120,
	y: 290,
	width:40,
	height:40,
	draw: function() {
		ctx.fillStyle = "#000000";
    	ctx.fillRect(this.x,this.y-this.width,
    		this.width,this.height);
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

ceil_y = 200;
floor_y = 290

		
//-------------- Enimies ------------------

var CeilBlocker = function(xStart) {
	console.log("creating CeilBlocker");
	this.swap = false;
	this.width = 50;
	this.height = 50;

	this.x = xStart; 
	this.y = this.width;

	this.draw = function() {
		if (this.swap) {
			ctx.fillStyle = "#990000";
    		ctx.fillRect(this.x,this.y-this.width,
    			this.width,this.height);
		} else {
			ctx.clearRect(this.x,this.y-this.width,
				this.width,this.height);
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
			this.y = actualHeight / 2 + this.width;
		} else {
			this.y = this.width;
		}
	};
};

var Blocker = function(xStart) {
	console.log("creating Blocker");
	this.swap = false;
	this.width = 50;
	this.height = 50;
	this.x = xStart; 
	this.y = actualHeight / 2;

	this.draw = function() {
		if (this.swap) {
			ctx.fillStyle = "#009900";
    		ctx.fillRect(this.x,this.y-this.width,
    			this.width,this.height);
		} else {
			ctx.clearRect(this.x,this.y-this.width,
				this.width,this.height);
		}
	};
	this.update = function(speed) {
		this.x += 10 * speed
		if (this.x > actualWidth) {
			this.x = 0;
			this.swap = !this.  swap;
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
	blockers: [],
	draw: function() {
		for (var b in this.blockers) {
		  this.blockers[b].draw();
		}
	},
	update: function() {
		for (var b in this.blockers) {
		  this.blockers[b].update(gameSpeed / 100);
		  if (collides(player, this.blockers[b])) {
		  	stepsSpentCollided++
		  }
		}
	}
}
