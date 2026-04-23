document.getElementById('btn-back').addEventListener('click', function () {
  window.history.back();
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = this.querySelector('input[placeholder="First name"]').value.trim();
  const email     = this.querySelector('input[placeholder="Email address"]').value.trim();
  const inquiry   = this.querySelector('input[name="inquiry"]:checked').value;
  const message   = this.querySelector('textarea').value.trim();

  if (!firstName || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  alert(`Thank you, ${firstName}! We received your "${inquiry}" inquiry and will get back to you shortly.`);
  this.reset();
});