(function(data){

	let name = 'service/shooter';
	
	nf.set({'name': name}, data);

})(function(node){
	this.construct = function(data){
		this.scene = data.scene;
		this.camera = data.camera;

		this.pointer = new THREE.Vector2();
		this.raycaster = new THREE.Raycaster();
	};

	this.strike = function(vector1, vector2){
		this.raycaster.setFromCamera(this.pointer, this.camera);

		var intersects = this.raycaster.intersectObjects(this.scene.children);

		var intersect = undefined;
		
		for (var i = 0; i < intersects.length; i++) {
			var inter = intersects[i];
			var check = inter.object.geometry.type == "BoxGeometry";
			if(check){
				intersect = intersects[i];
				break;
			} else {
				continue;
			}
		}

		if(intersect == undefined){
			return false;
		}
		if(intersect.distance == undefined){
			return false;
		}
		if(intersect.distance <= 4){
			return false;
		}

		var position = intersect.point;

		var geometry = new THREE.SphereGeometry(0.1, 16, 12);
		var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
		var sphere = new THREE.Mesh(geometry, material);

		sphere.position.set(position.x, position.y, position.z);

		this.scene.add(sphere);

		setTimeout(function(){
			this.scene.remove(sphere);
			sphere.geometry.dispose();
			sphere.material.dispose();
			sphere = undefined;
		}.bind(this, sphere), 1000);

		return true;
	};

	this.construct(node);

	return this;
});