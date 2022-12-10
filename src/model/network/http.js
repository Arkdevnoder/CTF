(function(data){

	let name = 'model/network/http';
	
	nf.set({'name': name}, data);

})(function(){
	this.get = function(url, callback){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onload = callback;
		xhr.send(form);
	};
	this.post = function(url, data, callback){
		var form = new FormData();
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				form.append(key, data[key]);
			}
		}
		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		xhr.onload = callback;
		xhr.send(form);
	};
});