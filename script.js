document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message!");
    // You can add more functionality here, like sending the form data to a server.
  });
// Login Form Submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Admin credentials
  const adminEmail = "admin@gmail.coom";
  const adminPassword = "admin";
  // Simple validation (for demonstration purposes)
  if (username === "admin" && password === "password") {
      alert('Login successful!');
      // Redirect to the portfolio page or another page
      window.location.href = 'index.html';
  } else {
      alert('Invalid username or password. Please try again.');
  }
});
