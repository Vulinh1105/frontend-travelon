document.addEventListener("DOMContentLoaded", () => {
  const revealTargets = document.querySelectorAll(
    ".experience-card, .mini-card, .service-card, .why-top, .section-title, .category-row, .luxury-copy, .footer-column"
  );

  revealTargets.forEach((item) => item.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealTargets.forEach((item) => observer.observe(item));

  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const sections = [...navLinks]
    .map((link) => {
      const id = link.getAttribute("href");
      return document.querySelector(id);
    })
    .filter(Boolean);

  function setActiveLink() {
    let currentId = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        currentId = `#${section.id}`;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === currentId);
    });
  }

  setActiveLink();
  window.addEventListener("scroll", setActiveLink);

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      const y = target.getBoundingClientRect().top + window.pageYOffset - 40;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}
