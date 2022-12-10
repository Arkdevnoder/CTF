(function(nf){

	var node = nf.get("model/app");
	nf.get("service/drawScene", node);
	nf.get("service/resizeCanvas", node);
	nf.get("controller/initWorld", node);
	nf.get("controller/initCamera", node);

})(window.nf);