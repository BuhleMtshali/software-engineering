// ================================
// GLOBAL STATE
// ================================
let selectedRating = null;

// ================================
// RATING BUTTON LOGIC
// ================================
const buttons = document.querySelectorAll(".rate-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));

    // Activate clicked button
    button.classList.add("active");

    // Store selected rating
    selectedRating = button.dataset.value;
  });
});

// ================================
// FORM SUBMISSION LOGIC
// ================================
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.querySelector("#fullName").value.trim();
  const email = document.querySelector("#emailAddress").value.trim();
  const category = document.querySelector("#category").value;
  const feedback = document.querySelector("#message").value.trim();

  // Validation
  if (!fullName || !email || !category || !feedback || !selectedRating) {
    alert("🚫 Please fill in all fields and select a rating");
    return;
  }

  // LOGGING ALL DATA
  console.log("===== 📋 FEEDBACK SUBMITTED =====");
  console.log("👤 Full Name:", fullName);
  console.log("📧 Email:", email);
  console.log("📂 Category:", category);
  console.log("⭐ Rating:", selectedRating);
  console.log("💬 Feedback:", feedback);
  console.log("================================");

  // OPTIONAL RESET
  form.reset();
  buttons.forEach(btn => btn.classList.remove("active"));
  selectedRating = null;
});
