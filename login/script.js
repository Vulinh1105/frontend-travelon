document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email    = document.getElementById('email-input').value.trim();
  const password = document.getElementById('password-input').value;

  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // nút login → homepage.html
  window.location.href = '../homepage.html';
});