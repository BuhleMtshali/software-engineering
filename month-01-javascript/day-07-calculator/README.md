# 🧮 Day 7: Mini Vanilla Calculator (Node.js CLI) ⚡

Welcome to **Day 7** of my Full-Stack Software Engineering journey 🚀  
Today we left the browser and stepped into the **terminal streets** 🖥️

This project is a simple **command-line calculator** built with Node.js using `prompt-sync` to accept user input and perform basic arithmetic operations.

Tiny app. Big brain energy. 🧠💥

---

## 🎯 What This Project Does

✅ Accepts two numbers from the user  
✅ Lets the user choose an operator (+, -, *, /)  
✅ Performs the calculation using a `switch` statement  
✅ Prevents division by zero 🚫  
✅ Repeats the program until the user says “no” 🔁  

Basically: a loop-powered calculator that refuses to quit until you’re done 😤

---

## 🧠 Concepts Practiced

- 🔁 While loops (program repetition)
- 🎛️ Switch statements for operation control
- 🔢 Parsing numeric input with `parseFloat`
- 🛑 Basic input validation (division by zero)
- 💬 CLI interaction using `prompt-sync`
- 🧼 Clean console output formatting

---

## 🛠️ Tech Stack

- 🟢 Node.js
- 📦 prompt-sync (for user input)
- 🧠 Pure JavaScript logic
- ❌ No browser
- ❌ No UI
- ✅ Just terminal power

---

## 📦 Installation & Setup

1️⃣ Install `prompt-sync`:
```bash
npm install prompt-sync

```

## 2️⃣ Run the calculator:

```
node app.js

```

## 🖱️ How It Works (User Flow)

1️⃣ User enters first number

2️⃣ User selects an operator (+, -, *, /)

3️⃣ User enters second number

4️⃣ Calculator performs operation

5️⃣ Result is displayed in a readable format

6️⃣ User chooses whether to run again (yes/no)

The loop keeps running until the user taps out 🏃‍♀️💨

## 🧾 Sample Output

```
======= Mini Vanilla Calculator =======

Enter your first number: 10
Choose an operator(+, -, /, *): *
Enter your second number: 5

10 * 5 = 50

Wanna run again (yes/no)? yes

```

- If user tries dividing by zero:

```
Enter your first number: 10
Choose an operator(+, -, /, *): /
Enter your second number: 0

Cannot divide by 0

```

## 🧠 Lessons Learned

- CLI apps still slap 🔥

- Loops give programs life (they don’t just exit and ghost you)

- switch statements are perfect for operator logic

- Input from users is messy… always validate 🧼

- Even simple apps teach core programming muscle 💪

## 🚀 Possible Improvements

➡️ Add support for more operations (%, power, square root)

➡️ Handle invalid operator input with error messages

➡️ Convert into a GUI calculator later 👀

➡️ Store calculation history 📜

## 💭 Reflection

- Today’s build was small but powerful.

- No UI, no CSS, just logic, flow, and pure JavaScript thinking.

- The kind of project that quietly levels up your fundamentals while looking harmless 😌⚔️

---

“Great developers don’t just build apps…
they build logic that survives bad input.” 💀🧠

---

### 📅 Day 7 complete.

- On to the next boss level 🚀