const prompt = require("prompt-sync")();

console.log('===== 👩🏽‍🎓 MINI STUDENT GRADE ANALYZER🧺 =====')

// ARRAY TO STORE STUDENTS
let grades_students = [
    {studentName: "buhle", studentSubject: "english", studentGrade: 54, studentPercentage: 78},
    {studentName: "zano", studentSubject: "english", studentGrade: 85, studentPercentage: 89}
]

// =======================
// ADD STUDENT FUNCTION
// =======================
function addStudent(){
    let name = prompt("What is the student's name: ").toLowerCase()
    let subject = prompt("What is the subject's name: ").toLowerCase()
    let grade = parseInt(prompt("What is the Student's grade: "))
    let totalGrade = parseInt(prompt("What is the total grade of the subject: "))

    if(isNaN(grade) || isNaN(totalGrade) || totalGrade === 0){
        console.log("🚫 Invalid grade input!");
        return;
    }

    let percentage = Math.round((grade / totalGrade) * 100);

    let student_object = {
        studentName: name,
        studentSubject: subject,
        studentGrade: grade,
        studentPercentage: percentage
    }

    let studentExists = grades_students.find(
        student => student.studentName === name
    )

    if(studentExists){
        console.log("‼️ Student already exists in the list");
    } else {
        grades_students.push(student_object)
        console.log("✅ Student added successfully");
    }
}

// =======================
// VIEW STUDENTS
// =======================
function viewStudents(){
    if(grades_students.length > 0){
        console.log("===== 📋 STUDENT LIST =====");
        for(let student of grades_students){
            console.log(`${student.studentName} | ${student.studentSubject} | ${student.studentGrade} | ${student.studentPercentage}%`)
        }
    } else{
        console.log('🚫 No students found');
    }
}

// =======================
// MAIN FUNCTION
// =======================
function mainFunction(){
    let choice = "yes";

    while(choice.toLowerCase() === "yes"){
        console.log("\n1. Add Student 🎓");
        console.log("2. View Students 📋");

        let option = prompt("Choose an option: ");

        switch(option){
            case "1":
                addStudent();
                break;
            case "2":
                viewStudents();
                break;
            default:
                console.log("🚫 Invalid option");
        }

        choice = prompt("Do you want to continue? (yes/no): ");
    }

    console.log("👋 Thank you for using the Grade Analyzer!");
}

// RUN APP
mainFunction();