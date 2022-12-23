(function(data){

	let name = 'model/cameraView';

	nf.set({'name': name}, data);

})(function(node){

	this.getDirection = function(){
		var vector = this.camera.getWorldDirection(
			this.rotationVector
		);
		return {
			x: -vector.x,
			y: vector.y,
			z: -vector.z
		};
	};

	this.getPosition = function(){
		return this.camera.position;
	}

	this.getRotation = function(){
		var direction = this.getDirection();
		this.compareVector1 = new THREE.Vector3(
			direction.x,
			0,
			direction.z
		);
		if(direction.z > 0){
			var angle = this.compareVector1.angleTo(this.compare2Vector);
			return angle;
		} else {
			var angle = this.compareVector1.angleTo(this.compare2Vector);
			return -angle;
		}
	}

	this.moveX = function(x){
		this.camera.position.x += x;
	};

	this.moveY = function(y){
		this.camera.position.y += y;
	};

	this.moveZ = function(z){
		this.camera.position.z += z;
	};

	this.isTouchDevice = function () {
		return (('ontouchstart' in window) ||
			(navigator.maxTouchPoints > 0) ||
			(navigator.msMaxTouchPoints > 0));
	};

	this.requestFullScreen = function(element) {
		var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
		if (requestMethod) {
			requestMethod.call(element);
		} else if (typeof window.ActiveXObject !== "undefined") {
			var wscript = new ActiveXObject("WScript.Shell");
			if (wscript !== null) {
				wscript.SendKeys("{F11}");
			}
		}
	};

	this.construct = function(data){

		this.camera = data.camera;
		this.canvas = data.canvas;
		this.compare1Vector = new THREE.Vector3(0, 0, 0);
		this.compare2Vector = new THREE.Vector3(1, 0, 0);
		this.rotationVector = new THREE.Vector3();

		if(!this.isTouchDevice()){
			document.querySelector(".controls-left").style.display = 'none';
			document.querySelector(".controls-right").style.display = 'none';
		}

		this.controls = nf.get(
			"model/controls",
			data
		);

		this.eulerRotation = new THREE.Euler(0, 0, 0, 'YXZ');

		if(!this.isTouchDevice()){

			this.controls.addEventListener('lock', function () {
				document.querySelector(".instructions").style.display = 'none';
			});

			this.controls.addEventListener('unlock', function () {
				setTimeout(function(){
					document.querySelector(".instructions").style.display = 'block';
				}.bind(this), 1000);
				this.controls.unlock();
			}.bind(this));

			document.querySelector(".instructions").addEventListener('click', function () {
				this.controls.lock();	
			}.bind(this));

		} else {

			document.querySelector(".instructions").addEventListener('click', function () {
				document.querySelector(".instructions").style.display = 'none';
			}.bind(this));

			this.canvas.addEventListener('touchstart', function(e){
				this._touchX = undefined;
				this._touchY = undefined;
			}.bind(this));

			this.canvas.addEventListener('touchmove', function(e){

				var PI_2 = Math.PI / 2;
				var maxPolarAngle = Math.PI;
				var minPolarAngle = 0;

				var movementX = Math.floor(event.touches[0].clientX - this._touchX);
				var movementY = Math.floor(event.touches[0].clientY - this._touchY);

				if(this._touchX == undefined || this._touchY == undefined){
					this._touchX = event.touches[0].clientX;
					this._touchY = event.touches[0].clientY;
					return;
				}

				this._touchX = event.touches[0].clientX;
				this._touchY = event.touches[0].clientY;

				this.eulerRotation.x = this.eulerRotation.x + movementY * 0.01;
				this.eulerRotation.y = this.eulerRotation.y + movementX * 0.01;

				this.eulerRotation.x = Math.max(PI_2 - maxPolarAngle, Math.min(PI_2 - minPolarAngle, this.eulerRotation.x));

				this.camera.quaternion.setFromEuler(this.eulerRotation);

			}.bind(this));

		}
	};

	this.construct(node);

	return this;

});