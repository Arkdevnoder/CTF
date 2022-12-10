(function(data){

	let name = 'model/primitive/rppd';
	let parent = 'model/object';
	
	nf.set({'name': name, 'parent': parent}, data);

})(function(data){

	this.width = null;
	this.height = null;
	this.depth = null;
	this.geometry = null;
	this.material = null;
	this.mesh = null;
	this.color = null;

	this.construct = function(params){

		this.width = params.width;
		this.height = params.height;
		this.depth = params.height;
		this.color = params.color;

		this.geometry = new THREE.BoxGeometry(
			this.width,
			this.height,
			this.depth
		);
		this.material = new THREE.MeshPhongMaterial(
			{
				color: this.color
			}
		);
		this.mesh = new THREE.Mesh(
			this.geometry,
			this.material
		);

		return this;

	};
	return this.construct(data);
});