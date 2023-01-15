(function(data){

	let name = 'model/primitive/rppd';
	let parent = 'model/object';
	
	nf.set({'name': name, 'parent': parent}, data);

})(function(data){

	this.isTouchDevice = function () {
		return (('ontouchstart' in window) ||
			(navigator.maxTouchPoints > 0) ||
			(navigator.msMaxTouchPoints > 0));
	};

	this.construct = function(params){

		this.width = params.width;
		this.height = params.height;
		this.depth = params.height;
		this.color = params.color;

		this.geometry = new THREE.BoxGeometry(
			this.width,
			this.height,
			this.depth
		);
		this.material = new THREE.MeshPhysicalMaterial(
			{
				color: this.color
			}
		);
		this.mesh = new THREE.Mesh(
			this.geometry,
			this.material
		);

		if(!this.isTouchDevice()){
			this.mesh.castShadow = false;
			this.mesh.receiveShadow = false;
		} else {
			this.mesh.castShadow = false;
			this.mesh.receiveShadow = false;
		}

	};

	this.construct(data);

	return this;
});