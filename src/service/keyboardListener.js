(function(data){

	let name = 'service/keyboardListener';
	
	nf.set({'name': name}, data);

})(function(node){

	this.construct = function(data){

		this.previousFrame = performance.now();

		this.velocity = 0.05;
		this.gravity = 9.8;

		this.velocity2 = 0.05;
		this.gravity2 = 9.8;

		this.jumpSpeed = 0.073;
		this.jumpSpeed2 = 0.073;

		this.ratio = 1;

		this.keyW = false;
		this.keyA = false;
		this.keyS = false;
		this.keyD = false;
		this.spacePushed = false;
		this.camera = data.camera;
		this.scene = data.scene;
		this.cameraView = data.cameraView;

		this.velocityY = 0;

		this._directionVector = new THREE.Vector3(0, 0, 0);

		this._rotationVector = new THREE.Vector3(0, 1, 0);

		this.bumpDetector = nf.get("model/bumpDetector", data);

		this._previousPosition = new THREE.Vector3(0, 0, 0);

		this.activate();
	};
	this.activate = function(){
		window.addEventListener('keydown', this.keydown.bind(this), false);
		window.addEventListener('keyup', this.keyup.bind(this), false);

		document.querySelector(".controls-left-arrow-left").addEventListener('touchstart', this.leftStart.bind(this), false);
		document.querySelector(".controls-left-arrow-up").addEventListener('touchstart', this.topStart.bind(this), false);
		document.querySelector(".controls-left-arrow-right").addEventListener('touchstart', this.rightStart.bind(this), false);
		document.querySelector(".controls-left-arrow-bottom").addEventListener('touchstart', this.bottomStart.bind(this), false);

		document.querySelector(".controls-left-arrow-left").addEventListener('touchend', this.leftEnd.bind(this), false);
		document.querySelector(".controls-left-arrow-up").addEventListener('touchend', this.topEnd.bind(this), false);
		document.querySelector(".controls-left-arrow-right").addEventListener('touchend', this.rightEnd.bind(this), false);
		document.querySelector(".controls-left-arrow-bottom").addEventListener('touchend', this.bottomEnd.bind(this), false);

		document.querySelector(".arrow").addEventListener('touchend', this.jump.bind(this), false);

		this.listener();
	};

	this.listener = function(){

		var resultVectorX = 0;
		var resultVectorY = 0;
		var resultVectorZ = 0;

		direction = this.cameraView.getDirection();

		this._directionVector = new THREE.Vector3(
			direction.x, 0, direction.z
		);

		this._directionVector = this._directionVector.projectOnPlane(
			this._rotationVector
		).normalize();

		if(this.keyW){
			resultVectorX += -this._directionVector.x*this.velocity2;
			resultVectorZ += -this._directionVector.z*this.velocity2;
		}
		if(this.keyA){
			var angle = -Math.PI / 2;
			this._layer1Vector = new THREE.Vector3(
				this._directionVector.x,
				this._directionVector.y,
				this._directionVector.z
			);
			this._layer1Vector.applyAxisAngle(this._rotationVector, angle);

			resultVectorX += this._layer1Vector.x*this.velocity2;
			resultVectorZ += this._layer1Vector.z*this.velocity2;
		}
		if(this.keyS){
			resultVectorX += this._directionVector.x*this.velocity2;
			resultVectorZ += this._directionVector.z*this.velocity2;
		}
		if(this.keyD){
			var angle = Math.PI / 2;
			this._layer2Vector = new THREE.Vector3(
				this._directionVector.x,
				this._directionVector.y,
				this._directionVector.z
			);
			this._layer2Vector.applyAxisAngle(this._rotationVector, angle);

			resultVectorX += this._layer2Vector.x*this.velocity2;
			resultVectorZ += this._layer2Vector.z*this.velocity2;
		}

		this.resultVector = new THREE.Vector3(
			resultVectorX,
			resultVectorY+this.velocityY,
			resultVectorZ
		);

		var gravityIterator = 0;

		var data = this.bumpDetector.collisions(
			new THREE.Vector3(
				this.camera.position.x+this.resultVector.x,
				this.camera.position.y+this.resultVector.y,
				this.camera.position.z+this.resultVector.z
			),
			this.scene,
			this.velocityY
		);

		var position = data[0];
		var isHover = data[1];

		this.camera.position.x = position.x;
		this.camera.position.y = position.y;
		this.camera.position.z = position.z;

		gravityIterator = this.gravity2*0.00025;

		if(!isHover){
			this.velocityY -= gravityIterator;
		} else {
			this.velocityY = 0;
		}

		setTimeout(function(){
			var ts = performance.now() - this.previousFrame;

			var ratio = ts/2;
			this.ratio = ratio;

			this.previousFrame = performance.now();
			this.listener();
		}.bind(this), 1000/this.ratio);
		
	}
	this.topStart = function(){
		this.keyW = true;
	};
	this.leftStart = function(){
		this.keyA = true;
	};
	this.bottomStart = function(){
		this.keyS = true;
	};
	this.rightStart = function(){
		this.keyD = true;
	};

	this.topEnd = function(){
		this.keyW = false;
	};
	this.leftEnd = function(){
		this.keyA = false;
	};
	this.bottomEnd = function(){
		this.keyS = false;
	};
	this.rightEnd = function(){
		this.keyD = false;
	};

	this.jump = function(){
		this.velocityY = this.jumpSpeed2;
	}

	this.keydown = function(event){
		var keyCode = event.keyCode;
		switch (keyCode) {
			case 68: //d
				this.rightStart();
			break;
			case 83: //s
				this.bottomStart();
			break;
			case 65: //a
				this.leftStart();
			break;
			case 87: //w
				this.topStart();
			break;
			case 32: //space
				this.jump();
			break;
		}
	};
	this.keyup = function(event){
		var keyCode = event.keyCode;
		switch (keyCode) {
			case 68: //d
				this.rightEnd();
			break;
			case 83: //s
				this.bottomEnd();
			break;
			case 65: //a
				this.leftEnd();
			break;
			case 87: //w
				this.topEnd();
			break;
		}
	};

	this.construct(node);
});