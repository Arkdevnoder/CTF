(function(data){

	let name = 'model/lights/directional';
	
	nf.set({'name': name}, data);

})(function(data){

	this.construct = function(params){
		this.color = params.color;
		this.x = params.x;
		this.y = params.y;
		this.z = params.z;
		var light = new THREE.DirectionalLight(0xffffff, 1);
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