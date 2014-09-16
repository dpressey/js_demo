function Vehicle(){
	// creating a Vehicle Function-Object
}

// Assigning values to the properties of the Vehicle prototype

Vehicle.prototype.maker = "Toyota";
Vehicle.prototype.model = "Corolla";
Vehicle.prototype.year = 1985;


// Declaring setter methods on the Vehicle prototype

Vehicle.prototype.setMaker = function(newMaker){
	this.maker = newMaker;
}

Vehicle.prototype.setModel = function(newModel){
	this.setModel = newModel;
}

Vehicle.prototype.setYear = function(newYear) {
	this.year = newYear;
}


// Instantiating a Vehicle object

var sedan = new Vehicle();