const prompt = require("prompt-sync")();

console.log('===== 👩🏽‍🎓 MINI STUDENT GRADE ANALYZER🧺 =====')

//this will hold the objects with grade objects
let grades_students = [
    {studentName: "buhle", studentSubject: "english", studentGrade: 54, studentPercentage: 78},
    {studentName: "zano", studentSubject: "english", studentGrade: 85, studentPercentage: 89}
]


//THIS FUNCTION WILL ADD STUDENTS TO THE LIST
function addStudent(){
    let name = prompt("What is the student's name: ").toLowerCase()
    let subject = prompt("What is the subject's name: ").toLowerCase()
    let grade = parseInt(prompt("What is the Student's grade: "))
    let totalGrade = parseInt(prompt("What is the total grade of the subject: "))

    //Percentage for the student
    let percentage = Math.round((grade / totalGrade) * 100);
    
    //CREATING THE STUDENT OBJECT
    let student_object = {
        studentName: name,
        studentSubject: subject,
        studentGrade: grade,
        studentPercentage: percentage
    }

    //FINDING THE AVERAGE
    let sum;
    for(let grade of grades_students){
        console.log(grade)
    }

    //NOW BEFORE ADDING THE STUDENTS LETS CHECK IF THEY EXIST
    let studentExists = grades_students.find(
        
        student => student.studentName === name
    )

    if(studentExists){
        console.log("‼️Student Already exists in the list")
    } else {
        grades_students.push(student_object)
        console.log("✅ Student added successfully")
    }


}

function viewStudents(){
    if(grades_students.length > 0){
        for(let students of grades_students){
            console.log(`${students.studentName} | ${students.studentSubject} | ${students.studentGrade} | ${students.studentPercentage}`)
        }
    } else{
        console.log('There are no stundents logged at the moment¡ß')
    }
}


function mainFunction(){
    //STARTING THE WHILE LOOP TO KEEP ADDING THE STUDENTS
    let addAgain = "yes"
    while(addAgain.toLowerCase() === "yes"){
        console.log()



        addAgain = prompt("Do you want to Add Another Student: ").toLowerCase();
    }

    
}

//close out message
console.log("Thank you for checking out the Grade Analyser")

viewStudents()