(function(data){

	let name = 'model/lights/ambient';
	
	nf.set({'name': name}, data);

})(function(data){

	this.construct = function(params){
		this.color = params.color;
		this.light = new THREE.AmbientLight(this.color);
	};

	this.construct(data);

	return this;
});