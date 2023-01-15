(function(data){

	let name = 'controller/initWorld';

	nf.set({'name': name}, data);

})(function(node){

	this.construct = function(data){
		this.scene = data.scene;
		this.camera = data.camera;
		this.renderer = data.renderer;
		this.node = data;
		this.activate();
	};

	this.activate = function(){

		var scene = this.scene;

		nf.get("controller/initCamera", this.node);

		nf.get("model/chunk/loader", {
			chunk_x: 0,
			chunk_z: 0,
			callback: function(blocks){
				for (var i = 0; i < blocks.length; i++) {
					var block = blocks[i];
					scene.add(block);
				}
			}
		});

		this.scene.add(
			nf.get("model/lights/directional",{
				color: 0xaaaaaa,
				x: 0.3,
				y: 0.4,
				z: 0.2
			}).light
		);
		this.scene.add(
			nf.get("model/lights/point",{
				color: 0xbbbbbb,
				x: 5,
				y: 5,
				z: 5
			}).light
		);

		this.scene.add(
			nf.get("model/lights/ambient", {
				color: 0xcccccc
			}).light
		);

		/*const loader = new THREE.CubeTextureLoader();
		const texture = loader.load([
			'assets/image/side.png',
			'assets/image/side.png',
			'assets/image/side.png',
			'assets/image/bottom.png',
			'assets/image/side.png',
			'assets/image/side.png',
		]);
		this.scene.background = texture;*/

		this.scene.background = new THREE.Color( 0xA6CAF0 );

	};

	this.construct(node);

	return this;

});