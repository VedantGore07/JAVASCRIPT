let students = [];

        function menu() {
            let choice;
            do {
                choice = prompt(
`Student Management System
1. Add Student
2. View Students
3. Update Student
4. Delete Student
5. Find Topper
6. Exit
Enter your choice:`
                );

                switch(choice) {
                    case "1": addStudent(); break;
                    case "2": viewStudents(); break;
                    case "3": updateStudent(); break;
                    case "4": deleteStudent(); break;
                    case "5": findTopper(); break;
                    case "6": console.log("Exiting..."); break;
                    default: console.log("Invalid choice!");
                }
            } while(choice !== "6");
        }

        function addStudent() {
            let id = prompt("Enter ID:");
            let name = prompt("Enter Name:");
            let age = parseInt(prompt("Enter Age:"));
            let marks = parseFloat(prompt("Enter Marks:"));
            students.push({id, name, age, marks});
            console.log("Student added!");
        }

        function viewStudents() {
            console.log("Student List:");
            students.forEach(s => {
                console.log(`ID: ${s.id}, Name: ${s.name}, Age: ${s.age}, Marks: ${s.marks}`);
            });
        }

        function updateStudent() {
            let id = prompt("Enter ID to update:");
            let s = students.find(s => s.id === id);
            if(s) {
                s.name = prompt("Enter new Name:", s.name);
                s.age = parseInt(prompt("Enter new Age:", s.age));
                s.marks = parseFloat(prompt("Enter new Marks:", s.marks));
                console.log("Student updated!");
            } else {
                console.log("Student not found!");
            }
        }

        function deleteStudent() {
            let id = prompt("Enter ID to delete:");
            let index = students.findIndex(s => s.id === id);
            if(index !== -1) {
                students.splice(index, 1);
                console.log("Student deleted!");
            } else {
                console.log("Student not found!");
            }
        }

        function findTopper() {
            if(students.length === 0) {
                console.log("No students available!");
                return;
            }
            let topper = students.reduce((max, s) => s.marks > max.marks ? s : max);
            console.log(`Topper: ${topper.name} with Marks: ${topper.marks}`);
        }

        // Start the menu
        menu();