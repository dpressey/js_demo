// create an object literal. Housing the properties and methods inside the object
var person = {
	// The properties of the object

	name: "denzel",
	age: 24,
	profession: "web developer",

	// The setter methods of the person object 

	setName: function(newName){
		this.name = newName;
	},

	setAge: function(newAge){
		this.age = newAge;
	},

	setProfession: function(newProfession){
		this.profession = newProfession;
	},
	

	// The getter methods of the person object

	getName: function(){
		return window.alert(this.name);
	},

	getAge: function(){
		return window.alert(this.age);
	},

	getProfession: function(){

		return window.alert(this.profession);
	}
};

