(function(data){

	let name = 'model/bumpDetector';
	
	nf.set({'name': name}, data);

})(function(){

	this.construct = function(){

		this.hitboxSize = 0.4;

		this.height = 1.8;

		this.cameraPositionHeight = 1.5;

		this.hitbox = new THREE.Box3(
			new THREE.Vector3(0, 0, 0),
			new THREE.Vector3(this.hitboxSize, this.height, this.hitboxSize)
		);

	};

	this.inArray = function(element, array){
		var exists = false;
		for (var i = 0; i < array.length; i++) {
			if(element == array[i]){
				return true;
			}
		}
		return false;
	};

	this.computeHitbox = function(position){
		this.hitbox.min.x = position.x-this.hitboxSize/2;
		this.hitbox.min.y = position.y-this.cameraPositionHeight;
		this.hitbox.min.z = position.z-this.hitboxSize/2;

		this.hitbox.max.x = position.x+this.hitboxSize/2;
		this.hitbox.max.y = position.y+(this.height-this.cameraPositionHeight);
		this.hitbox.max.z = position.z+this.hitboxSize/2;
	};

	this.collisions = function(position, scene){

		var denyCollisions = [1];
		var axes = ["y"];

		var isHover = false;

		var positionClone = position.clone();

		this.computeHitbox(positionClone);

		var collisions = [];

		for (var i = 0; i < scene.children.length; i++) {
			var object = scene.children[i];
			if(object.type == "Mesh" && object.geometry.type == "BoxGeometry"){
				if(object.geometry.boundingBox == undefined ||
					object.geometry.boundingBox == null){
					object.geometry.computeBoundingBox();
				}
				var newBox = object.geometry.boundingBox.clone().translate(object.position);

				if(this.hitbox.intersectsBox(newBox)){

					var result = newBox.clone().intersect(this.hitbox);

					var diffX = result.max.x - result.min.x;
					var diffY = result.max.y - result.min.y;
					var diffZ = result.max.z - result.min.z;

					var volume = diffX*diffY*diffZ;

					collisions.push([new THREE.Vector3(diffX, diffY, diffZ), newBox, volume]);

				}

			}
		}

		collisions.sort(function(a, b){
			if(a[2] > b[2]){
				return -1;
			} else if(a[2] == b[2]) {
				return 0;
			} else {
				return 1;
			}
		});

		for (var i = 0; i < collisions.length; i++) {

			var collision = collisions[i];

			this.computeHitbox(positionClone);

			var result = collision[1].clone().intersect(this.hitbox);

			var diffX = result.max.x - result.min.x;
			var diffY = result.max.y - result.min.y;
			var diffZ = result.max.z - result.min.z;

			if(diffX*diffY*diffZ == 0){
				continue;
			}

			var newBox = collision[1];

			if(diffX < diffY && diffX < diffZ){
				if(this.hitbox.max.x < newBox.max.x){
					positionClone.x -= diffX;
				} else {
					positionClone.x += diffX;
				}
			}

			if(diffY < diffX && diffY < diffZ){
				if(this.hitbox.max.y < newBox.max.y){
					positionClone.y -= diffY;
					isHover = true;
				} else {
					positionClone.y += diffY;
					isHover = true;
				}
			}

			if(diffZ < diffX && diffZ < diffY){
				if(this.hitbox.max.z < newBox.max.z){
					positionClone.z -= diffZ;
				} else {
					positionClone.z += diffZ;
				}
			}
		}

		return [positionClone, isHover];

	};



	this.construct();

	return this;

});