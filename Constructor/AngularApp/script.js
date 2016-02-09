(function(){
	var app = angular.module('sampleTaskManager', []);

	var taskController = function(Task) {
		var ctrl = this;
		ctrl.tasks = [	new Task({name: 'Task1'}),
						new Task({name: 'Task2', completed: true})];
	};

	app.controller('taskCtrl', taskController);
}());