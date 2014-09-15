// Create a "container" namespace that wraps all properties and functions
var container = {
	// instantiate a new person object
	var person = new Object();

	// assign person properties with values

	person.name = "Denzel";
	person["age"] = 24;
	person.profession = "Web Developer";

	// create setter functions for the person object

	person.setName = function(newName){
		this.name = newName;
	}

	person.setAge = function(newAge){
		this["age"] = newAge;
	}

	person.setProfession = function(newProfession){
		this.profession = newProfession;
	}

}
