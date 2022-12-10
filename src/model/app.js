(function(data){

	let name = 'model/app';
	
	nf.set({'name': name}, data);

})(function(){

	this.scene = {};
	this.camera = {};
	this.renderer = {};
	this.canvas = {};

	this.construct = function(){
		this.canvas = document.querySelector("canvas");
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		this.renderer = new THREE.WebGLRenderer({"canvas": this.canvas});
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		return this;
	};

	return this.construct();

});