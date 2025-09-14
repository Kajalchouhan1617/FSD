document.getElementById("adminLoginIcon").addEventListener("click", () => {
  const loginModal = new bootstrap.Modal(document.getElementById("adminLoginModal"));
  loginModal.show();
});

document.getElementById("adminLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("adminUsername").value;
  const password = document.getElementById("adminPassword").value;

  if (username === "admin" && password === "admin123") {
    alert("Login successful!");
    bootstrap.Modal.getInstance(document.getElementById("adminLoginModal")).hide();
  } else {
    alert("Invalid credentials.");
  }
});
