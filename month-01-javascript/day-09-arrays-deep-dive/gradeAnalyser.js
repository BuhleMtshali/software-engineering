const prompt = require("prompt-sync")();

console.log('===== 👩🏽‍🎓 MINI STUDENT GRADE ANALYZER🧺 =====')

//this will hold the objects with grade objects
let grades_students = [{studentName: "buhle", studentSubject: "english", studentGrade: 54}]


//THIS FUNCTION WILL ADD STUDENTS TO THE LIST
function addStudent(studentArray){
    let name = prompt("What is the student's name: ").toLowerCase()
    let subject = prompt("What is the subject's name: ").toLowerCase()
    let grade = parseInt(prompt("What is the Student's grade: "))
    
    //CREATING THE STUDENT OBJECT
    let student_object = {
        studentName: name,
        studentSubject: subject,
        studentGrade: grade
    }

    //NOW BEFORE ADDING THE STUDENTS LETS CHECK IF THEY EXIST
    let studentExists = grades_students.find(student => student.studentName === name)

    if(studentExists){
        console.log("‼️Student Already exists in the list")
    } else {
        grades_students.push(student_object)
    }
}

addStudent()