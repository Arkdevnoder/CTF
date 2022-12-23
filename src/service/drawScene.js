(function(data){

	let name = 'service/drawScene';

	nf.set({'name': name}, data);

})(function(node){

	this.construct = function(data){
		this.scene = data.scene;
		this.camera = data.camera;
		this.renderer = data.renderer;
		this.activate();
	};

	this.activate = function(){
		this.renderer.render(
			this.scene,
			this.camera
		);

		requestAnimationFrame(
			this.activate.bind(this)
		);
	};
	
	this.construct(node);

});