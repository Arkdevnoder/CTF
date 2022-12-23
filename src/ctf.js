(function(nf){

	node = nf.get("model/app");
	nf.get("service/drawScene", node);
	nf.get("service/resizeCanvas", node);
	nf.get("service/keyboardListener", node);
	nf.get("controller/initWorld", node);

})(window.nf);