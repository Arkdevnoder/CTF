(function(data){

	let name = 'service/resizeCanvas';
	
	nf.set({'name': name}, data);

})(function(node){
	this.camera = {};
	this.renderer = {};

	this.construct = function(data){
		this.camera = data.camera;
		this.renderer = data.renderer;
		this.activate();
	};
	this.activate = function(){
		window.addEventListener('resize', this.resize.bind(this), false );
	};
	this.resize = function(){
		camera = this.camera;
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	};
	this.construct(node);
});