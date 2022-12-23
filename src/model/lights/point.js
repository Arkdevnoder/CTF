(function(data){

	let name = 'model/lights/point';
	
	nf.set({'name': name}, data);

})(function(data){

	this.construct = function(params){
		this.color = params.color;
		this.x = params.x;
		this.y = params.y;
		this.z = params.z;
		var light = new THREE.PointLight(0xffffff, 1, 100);

		light.shadow.mapSize.width = 512;
		light.shadow.mapSize.height = 512;
		light.shadow.camera.near = 0.5;
		light.shadow.camera.far = 500;
		
		light.position.set(
			this.x,
			this.y,
			this.z
		);
		light.castShadow = true;
		this.light = light;
	};

	this.construct(data);

	return this;
});