(function(data){

	let name = 'model/chunk/loader';
	let parent = 'model/object';
	
	nf.set({'name': name, 'parent': parent}, data);

})(function(data){

	this.chunk_x = null;
	this.chunk_y = null;
	this.name = null;
	this.scheme_data = null;
	this.chunk_data = null;

	this.construct = function(params){

		this.chunk_x = params.chunk_x;
		this.chunk_y = params.chunk_y;

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