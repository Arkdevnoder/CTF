(function(data){

	let name = 'controller/initCamera';

	nf.set({'name': name}, data);

})(function(node){

	this.construct = function(data){
		this.camera = data.camera;
		this.activate();
		this.checker();
	};

	this.activate = function(){
		this.camera.position.x = 0;
		this.camera.position.y = 3;
		this.camera.position.z = 5;
	};

	this.checker = function(){
		setInterval(function(){
			if(this.camera.position.y < -10){
				this.activate();
			}
		}.bind(this), 1000);
	}

	this.construct(node);

	return this;

});