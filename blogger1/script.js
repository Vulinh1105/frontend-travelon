

document.getElementById('btn-next').addEventListener('click', function () {
  window.location.href = '../blogger2/index.html';
});

window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in-element');

  elements.forEach(el => {
    el.classList.add('active');
  });
});
