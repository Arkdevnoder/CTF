(function(data){

	let name = 'model/chunk/loader';
	
	nf.set({'name': name}, data);

})(function(data){

	this.chunk_size = 16;

	this.construct = function(params){

		this.chunk_x = params.chunk_x;
		this.chunk_z = params.chunk_z;
		this.callback = params.callback;
		return this.activate();

	};

	this.chunk = function(chunk, offsetX, offsetZ){

		var blocks = [];

		var horizontalLayer = chunk.data;
		for (var i = 0; i < horizontalLayer.length; i++) {
			var profileLayer = horizontalLayer[i];
			for (var j = 0; j < profileLayer.length; j++) {
				var frontalLayer = profileLayer[j];
				for (var k = 0; k < frontalLayer.length; k++) {

					var block = frontalLayer[k];

					var x = k+offsetX;
					var y = i;
					var z = j+offsetZ;

					if(block["id"] == 0){

					}

					if(block["id"] == 1){

						blocks.push(
							nf.get("model/primitive/rppd", {
								width: 1,
								height: 1,
								depth: 1,
								color: 0x103821
							}).setX(x).setY(y).setZ(z).mesh
						);

					}

				}
			}
		}

		return blocks;
	};

	this.activate = function(){

		var callback = this.callback;
		var chunkHandler = this.chunk;
		var chunkOffsetX = this.chunk_x*this.chunk_size;
		var chunkOffsetZ = this.chunk_z*this.chunk_size;

		nf.get("model/network/http").get(
			"assets/chunk/example.json?v=1",
			function(data){
				var response = JSON.parse(data);
				var blocks = chunkHandler(
					response,
					chunkOffsetX,
					chunkOffsetZ
				);
				callback(blocks);
			}
		);

	};

	return this.construct(data);
	
});