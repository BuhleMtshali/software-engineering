# 🎓 Mini Student Grade Analyzer 📊✨

Welcome to my **Day 9 Mini Project** from my Full-Stack Software Engineering journey 💻🔥  

This is a **CLI-based Student Grade Analyzer** that allows users to add students, calculate their grades, and view stored records.

---

# 🎯 Project Overview

This project simulates a simple student management system where users can:

- Add student records 📥  
- Automatically calculate percentages 📊  
- View all students 📋  

The goal was to practice **real-world logic building** using JavaScript fundamentals.

---

# 🧠 Concepts Covered

- ✅ Variables & Data Types  
- ✅ User Input (`prompt-sync`)  
- ✅ Functions  
- ✅ Arrays & Objects  
- ✅ Loops (`while`, `for`)  
- ✅ Conditionals (`if`, `switch`)  
- ✅ Input Validation  
- ✅ Program Flow Control  

---

# ⚙️ Features

- 🎓 Add a new student  
- 📊 Automatically calculate percentage  
- 📋 View all students  
- 🚫 Prevent duplicate student entries  
- 🔁 Loop-based menu system  

---

# 🛠️ How It Works

1. User starts the program  
2. A menu is displayed:
   - Add Student  
   - View Students  
3. If adding a student:
   - Enter name, subject, grade, total marks  
   - Program calculates percentage automatically  
4. If viewing students:
   - All stored records are displayed  
5. User can continue or exit  

---

# 💻 Example Usage

```bash
===== 👩🏽‍🎓 MINI STUDENT GRADE ANALYZER🧺 =====

1. Add Student 🎓
2. View Students 📋

Choose an option: 1

What is the student's name: buhle
What is the subject's name: math
What is the Student's grade: 80
What is the total grade of the subject: 100

✅ Student added successfully

```

# 🧪 Code Snippet

```
let percentage = Math.round((grade / totalGrade) * 100);

let student_object = {
    studentName: name,
    studentSubject: subject,
    studentGrade: grade,
    studentPercentage: percentage
};

```

## ⚠️ Challenges Faced

❌ Handling invalid inputs (NaN, empty values)

❌ Managing program flow with loops

❌ Avoiding duplicate student entries

❌ Structuring functions properly


## 🧠 What I Learned

💡 How to structure a full CLI application

💡 How to store and manage data using arrays of objects

💡 The importance of validating user input

💡 How to separate logic into clean, reusable functions

## 🚀 Future Improvements

🔥 Add grade classification (A, B, C…)

🔥 Calculate class average

🔥 Search for a student 🔎

🔥 Delete a student ❌

🔥 Store data in a file or database


# 📁 Project Setup

## 1. Install dependencies

```
npm install prompt-sync

```

## 2. Run the app

```
node app.js

```

# 💬 Final Thoughts

This project helped me move from writing small scripts to building a structured, interactive program.

I’m starting to think more like a developer:
👉 breaking problems down
👉 organizing logic
👉 handling real user input