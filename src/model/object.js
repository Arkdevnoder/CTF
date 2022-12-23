(function(data){

	let name = 'model/object';
	
	nf.set({'name': name}, data);

})(function(){

	this.setX = function(x){
		this.mesh.position.x = x;
		return this;
	};

	this.setY = function(y){
		this.mesh.position.y = y;
		return this;
	};

	this.setZ = function(z){
		this.mesh.position.z = z;
		return this;
	};

	return this;

});