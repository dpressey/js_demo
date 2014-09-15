
	// instantiate a new person object
	var animal = new Object();

	// assign person properties with values

	animal.name = "Lion";
	// the age property with type number can be accessed with 
	// the array or dot notation
	animal["age"] = 5;
	animal.classType = "mammal";

	// create setter functions for the person object

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
