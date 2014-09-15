
	// instantiate a new animal object
	var animal = new Object();

	// assign properties for the animal object

	animal.name = "Lion";
	// the age property with type number can be accessed with 
	// the array or dot notation
	animal["age"] = 5;
	animal.classType = "mammal";

	// create setter functions for the animal object

	animal.setName = function(newName){
		this.name = newName;
		return this.newName;
	}

	animal.setAge = function(newAge){
		this["age"] = newAge;
		return this["age"];
	}

	animal.setClassType = function(newClassType){
		this.classType = newClassType;
		return this.classType;
	}
