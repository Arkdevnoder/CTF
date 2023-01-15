(function(data){

	let name = 'controller/initStrike';

	nf.set({'name': name}, data);

})(function(node){

	this.construct = function(data){
		this.distance = 4;
		this.camera = data.camera;
		this.scene = data.scene;
		this.pointer = new THREE.Vector2();
		this.raycaster = new THREE.Raycaster();
	};

	this.strike = function(){
		this.raycaster.setFromCamera(this.pointer, this.camera);

		var intersects = this.raycaster.intersectObjects(this.scene.children);
		if(intersects[0] == undefined){
			return false;
		}
		var mesh = intersects[0].object;
		if(intersects[0].distance <= 4){
			this.scene.remove(mesh);
			mesh.geometry.dispose();
			mesh.material.dispose();
			mesh = undefined;
			return true;
		}
		return false;
	};

	this.build = function(hitbox){
		this.raycaster.setFromCamera(this.pointer, this.camera);

		var intersects = this.raycaster.intersectObjects(this.scene.children);
		if(intersects.length == 0){
			return;
		}
		if(intersects[0].distance == undefined){
			return;
		}
		if(intersects[0].distance <= 4){
			var normal = intersects[0].face.normal;
			var position = intersects[0].object.position;
			var coords = position.clone().add(normal);
			var mesh = nf.get("model/primitive/rppd", {
				width: 1,
				height: 1,
				depth: 1,
				color: 0x103821
			}).setX(coords.x).setY(coords.y).setZ(coords.z).mesh

			if(mesh.geometry.boundingBox == undefined ||
				mesh.geometry.boundingBox == null){
				mesh.geometry.computeBoundingBox();
			}

			var hb = hitbox.clone().translate(new THREE.Vector3(0, 0.1, 0));

			var newBox = mesh.geometry.boundingBox.clone().translate(mesh.position);

			if(!hb.intersectsBox(newBox)){
				this.scene.add(mesh);
			}
			
		}

	};

	this.construct(node);

	return this;

});