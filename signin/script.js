document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email    = document.getElementById('email-input').value.trim();
  const password = document.getElementById('password-input').value;

  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters.');
    return;
  }

  // nút register → homepage.html
  window.location.href = '../homepage.html';
});