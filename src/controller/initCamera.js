(function(data){

	let name = 'controller/initWorld';

	nf.set({'name': name}, data);

})(function(node){

	this.camera = {};

	this.construct = function(data){
		this.camera = data.camera;
		this.activate();
	};

	this.activate = function(){
	};

	this.construct(node);

});