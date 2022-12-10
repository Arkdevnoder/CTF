(function(data){

	let name = 'controller/initWorld';

	nf.set({'name': name}, data);

})(function(node){

	this.scene = {};
	this.camera = {};
	this.renderer = {};

	this.construct = function(data){
		this.scene = data.scene;
		this.camera = data.camera;
		this.renderer = data.renderer;
		this.activate();
	};

	this.activate = function(){

		this.scene.add(
			nf.get("model/primitive/rppd", {
				width: 1,
				height: 1,
				depth: 1,
				color: 0x00ee00,
			}).setX(5).mesh
		);

		this.scene.add(
			nf.get("model/primitive/rppd", {
				width: 1,
				height: 1,
				depth: 1,
				color: 0x00ee00,
			}).setY(5).mesh
		);

		this.scene.add(
			nf.get("model/primitive/rppd", {
				width: 1,
				height: 1,
				depth: 1,
				color: 0x00ee00,
			}).setZ(5).mesh
		);

		this.scene.add(
			nf.get("model/primitive/rppd", {
				width: 1,
				height: 1,
				depth: 1,
				color: 0x00ee00,
			}).setX(-5).mesh
		);

		this.scene.add(
			nf.get("model/primitive/rppd", {
				width: 1,
				height: 1,
				depth: 1,
				color: 0x00ee00,
			}).setY(-5).mesh
		);

		this.scene.add(
			nf.get("model/primitive/rppd", {
				width: 1,
				height: 1,
				depth: 1,
				color: 0x00ee00,
			}).setZ(-5).mesh
		);

		this.camera.position.x = 4;
		this.camera.position.y = 1;
		this.camera.position.z = 12;

		const light2 = new THREE.DirectionalLight( 0xffffff, 1 );
		light2.position.set( 0.4, 0.3, 0.2 );
		light2.castShadow = true;
		this.scene.add(light2);

		const light = new THREE.AmbientLight( 0x404040 ); // soft white light
		this.scene.add(light);

		const loader = new THREE.CubeTextureLoader();
		const texture = loader.load([
			'assets/image/side.png',
			'assets/image/side.png',
			'assets/image/side.png',
			'assets/image/bottom.png',
			'assets/image/side.png',
			'assets/image/side.png',
		]);
		this.scene.background = texture;

	};

	this.construct(node);

});