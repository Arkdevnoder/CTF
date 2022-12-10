(function(object){

	var nameFactory = {};

	nameFactory.objects = {};

	nameFactory.parents = {};

	nameFactory.getContext = function(){
		return {};
	};

	nameFactory.data = function(name){
		return this.objects[name];
	};

	nameFactory.isEmptyObject = function(object){
		return obj && Object.keys(obj).length 
		=== 0 && Object.getPrototypeOf(obj)
		=== Object.prototype;
	};

	nameFactory.mergeObjects = function(object1, object2){
		for (var attrname in object2) {
			object1[attrname] = object2[attrname];
		}
		return object1;
	};

	nameFactory.get = function(name, ...args){

		var parent = this.parents[name];

		var parentObject = {};

		if(parent !== undefined){
			parentObject = this.get(
				parent, ...args
			);
		}

		if(this.objects[
			name
		] == undefined){
			console.error("Class "+name+" not found");
			return;
		}

		var object = this.objects[
			name
		].bind(
			this.getContext()
		)(...args);

		return this.mergeObjects(
			object,
			parentObject
		);
	};

	nameFactory.set = function(definer, object){

		object.bind(
			this.getContext()
		);
		object._class = definer.name;
		object._parent = definer.parent;

		this.objects[
			definer.name
		] = object;

		this.parents[
			definer.name
		] = definer.parent;

		return object;
	};

	nameFactory.parent = function(object, ...args){
		return this.get(
			object._parent, ...args
		);
	};

	nameFactory.instanceOf = function(name, object){
		var array = name.Split("/")
		return array[
			array.length - 1
		] == name;
	};

	object.nf = nameFactory;

})(window);