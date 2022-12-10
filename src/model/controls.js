(function(data){

	let name = 'model/controls';

	nf.set({'name': name}, data);

})(function(node){

	this.camera = {};
	this.renderer = {};

	this.construct = function(data){
		this.camera = data.camera;
		this.renderer = data.renderer;
		return this.activate();
	};
	this.activate = function(){
		return new THREE.OrbitControls(
			this.camera,
			this.renderer.domElement
		);
	};

	return this.construct(node);
});