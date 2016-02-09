// Constructor
var Task = function(name) {
	this.name = name;
	this.completed = false;
	// method for change task state
	this.completed = function() {
		console.log('completing task: ' + this.name);
		this.completed = true;
	}
	// method for saving task
	this.save = function() {
		console.log('saving Task.. ' + this.name);
	}
}

// Create sample tasks
var task1 = new Task('Sample of task construction');
var task2 = new Task('Sample of task for module');
var task3 = new Task('Sample of task for prototype');
// Change state
task1.completed();
task1.save();
task2.save();
task3.save();

