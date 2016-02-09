// Constructor
var Task = function(name) {
	this.name = name;
	this.completed = false;
}

// Encapsulate methods in prototype
Task.prototype.complete = function() {
	console.log('completing task: ' + this.name);
	this.completed = true;
}

Task.prototype.save = function() {
	console.log('Saving task...');
}

Task.prototype.printInfo = function() {
	console.log('Task name: ' + this.name + ' ' + '| Task complete state: ' + this.completed );
}

module.exports = Task;