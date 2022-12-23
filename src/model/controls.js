(function(data){

	let name = 'model/controls';

	nf.set({'name': name}, data);

})(function(node){

	this.construct = function(data){
		this.camera = data.camera;
		this.renderer = data.renderer;
		return this.activate();
	};
	this.activate = function(){
		return new THREE.PointerLockControls(
			this.camera,
			this.renderer.domElement
		);
	};

	return this.construct(node);
	
});