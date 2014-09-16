// Create a function object utilizing the constructor pattern

function School(name, type, city, state){
	this.name = name;
	this.type = type;
	this.city = city;
	this.state = state
}

// Add setter methods to the School Prototype's property

School.prototype.setSchoolName = function(newName) {
	this.name = newName;
};

School.prototype.setSchoolType = function(newType){
	this.type = newType;
}

School.prototype.setSchoolCity = function(newCity){
	this.city = newCity;
}

School.prototype.setSchoolState = function(newState){
	this.state = newState;
}

var s = new School("CTK", "high school", "middle village", "NY");