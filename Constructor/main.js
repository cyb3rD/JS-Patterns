var Task = require('./task');

// Create sample tasks
var task1 = new Task('Sample of task construction');
var task2 = new Task('Sample of task for module');
var task3 = new Task('Sample of task for prototype');
// Change state
task1.complete();
task1.save();
task2.save();
task3.save();

task1.printInfo();
task2.printInfo();
task3.printInfo();