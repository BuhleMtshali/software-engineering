# 🚀 Day 8: Functions, Scope & Closures 🔐

Welcome to **Day 8** of my Full-Stack Software Engineering journey 💻✨  

Today was all about understanding how JavaScript **organizes, protects, and remembers data** using:

- Functions 🧠  
- Scope 📦  
- Closures 🔐  

---

# 🎯 Goal of This Day

- Understand how functions work deeply  
- Learn how scope controls variable access  
- Master closures (functions remembering data)  
- Build real-world mini projects using these concepts  

---

# 🧠 Core Concepts

## 1️⃣ Functions

Functions are reusable blocks of code.

```js
function greet(name) {
  return "Hello " + name;
}

```

# 🚀 Day 8: Functions, Scope & Closures 🔐

Welcome to **Day 8** of my Full-Stack Software Engineering journey 💻✨  

Today was all about understanding how JavaScript **organizes, protects, and remembers data** using:

- Functions 🧠  
- Scope 📦  
- Closures 🔐  

---

# 🎯 Goal of This Day

- Understand how functions work deeply  
- Learn how scope controls variable access  
- Master closures (functions remembering data)  
- Build real-world mini projects using these concepts  

---

# 🧠 Core Concepts

## 1️⃣ Functions

Functions are reusable blocks of code.

```js
function greet(name) {
  return "Hello " + name;
}

```

## 2️⃣ Scope

- Scope determines where variables can be accessed

### 📦 Types of Scope:

- Global Scope → available everywhere

- Function Scope → only inside a function

- Block Scope (let, const) → inside {}

```

let globalVar = "I'm everywhere";

function test() {
  let localVar = "Only inside here";
}

```

## 3️⃣ Closures 🔐

- Closures happen when:

    - A function remembers variables from its outer function even after the outer function has finished

### 🧠 Simple Example:

```

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

```

- 👉 ```inner()``` still has access to count

- That’s a closure


# 🧪 Projects Built

## 🔐 1. Password Generator

### 💡 Description:

- A secure password generator using closures and randomness

### ⚙️ Features:

- Generates random passwords

- Uses letters, numbers, and symbols

- Custom password length

```
function createPasswordGenerator(){
    const charSets = {
        lower: 'abcdefghijklmnopqrstuvwxyz',
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        nums: '0123456789',
        special: '!@#$%^&*()-_=+[]{}|;:,.<>?'
    };

    return function generate(length = 10){
        let allowedChars = charSets.lower + charSets.upper;
        allowedChars += charSets.nums + charSets.special;   

        let password = '';
        for(let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        return password;
    }
}

const secureGenerator = createPasswordGenerator();
const userPassword = secureGenerator(16);

console.log(userPassword);

```