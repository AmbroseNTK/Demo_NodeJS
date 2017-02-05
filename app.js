console.log("Hello World");
var storage = require("node-persist")
storage.initSync({ dir: "students" });

var yargs = require("yargs");

var storage = require('node-persist');

storage.initSync({
    dir: "mydata",
    ttl: false
});

function getAllStudents() {
    var students = storage.getItemSync('students');
    if (typeof students === "undefined") {
        return [];
    }

    return students;
}


function showStudents() {
    var students = getAllStudents();
    for (var i = 0; i < students.length; i++) {
        console.log('Student: ' + students[i].fullname + "(" + students[i].id + ")");
    }
}

function addStudent(studentId, studentName) {
    var students = getAllStudents();
    students.push({
        id: studentId,
        fullname: studentName
    });

    storage.setItemSync('students', students);
}

function removeStudent(studentId) {
    var students = getAllStudents();

    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            students.splice(i, 1);
        }
    }

    storage.setItemSync('students', students);
}

function editStudent(studentId, studentName) {
    var students = getAllStudents();

    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            students[i].fullname = studentName;
        }
    }

    storage.setItemSync('students', students);
}

var argv = yargs
    .command("list", "Get a list's student", function (yargs) {

    })
    .command("create", "Create a new student", function (yargs) {
        return yargs.option({
            id: {
                demand: true,
                type: "number"
            },
            fullName: {
                demand: true,
                type: "string"
            }
        })
    })
    .command('edit', 'Edit a Student', function (yargs) {
        return yargs.options({
            id: {
                demand: true,
                type: "number"
            },
            fullname: {
                demand: true,
                type: "string"
            }
        });
    })
    .argv;

var action = argv._[0];
// Lấy tên action
var action = argv._[0];
 
if (action === 'list'){
    showStudents();
}
else if (action === 'create'){
    addStudent(argv.id, argv.fullName);
    console.log('Add Successfully!');
    showStudents();
}
else if (action === 'delete'){
    removeStudent(argv.id);
    console.log('Delete Successfully!');
    showStudents();
}
else if (action === 'edit'){
    editStudent(argv.id, argv.fullName);
    console.log('Edit Successfully!');
    showStudents();
}
else{
    console.log('Input invalid');
    showStudents();
}