var task = {
	title: 'My Sample task',
	description: 'Sample task description'
};

Object.defineProperty(task, 'toString', {
	value: function() {
		return this.title + ' ' + this.description;
	},
	writeable: false,
	enumerable: false,
	configurable: true
});

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
	value: function() {
		return this.title + ' ' + this.description + ' is URGENT!';
	},
	writeable: false,
	enumerable: false,
	configurable: true
});

console.log(urgentTask.toString());