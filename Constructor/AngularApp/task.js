(function() {
	var app = angular.module('sampleTaskManager');

	app.factory('Task', function(){
		// Constructor
		var Task = function(data) {
			this.name = data.name;
			this.completed = data.completed;
		};

		// Encapsulate methods in prototype
		Task.prototype.complete = function() {
			console.log('Completing task: ' + this.name);
			this.completed = true;
		};

		Task.prototype.save = function() {
			console.log('Saving task...');
		};

		Task.prototype.printInfo = function() {
			console.log('Task name: ' + this.name + ' ' + '| Task complete state: ' + this.completed );
		};

		return Task;
	});
	

}());
