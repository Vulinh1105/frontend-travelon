document.getElementById('btn-back').addEventListener('click', function () {
  window.history.back();
});

document.querySelector('.btn-learn').addEventListener('click', function () {
  document.querySelector('.faq-section').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn-start').addEventListener('click', function () {
  alert('Redirecting to contact form...');
  // window.location.href = 'form.html';
});