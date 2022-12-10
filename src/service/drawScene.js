(function(data){

	let name = 'service/drawScene';

	nf.set({'name': name}, data);

})(function(node){

	this.scene = {};
	this.camera = {};
	this.renderer = {};
	this.canvas = {};
	this.controls = {};

	this.construct = function(data){
		this.scene = data.scene;
		this.camera = data.camera;
		this.renderer = data.renderer;
		this.canvas = data.canvas;
		this.controls = nf.get(
			"model/controls",
			data
		);
		this.activate();
	};

	this.activate = function(){
		this.renderer.render(
			this.scene,
			this.camera
		);

		this.controls.update();

		requestAnimationFrame(
			this.activate.bind(this)
		);
	};
	
	this.construct(node);

});