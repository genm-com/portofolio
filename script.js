// ===== Tahun otomatis di footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Theme toggle (light / dark) + simpan pilihan =====
const html = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-icon");

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  themeIcon.innerHTML = theme === "dark" ? "&#9790;" : "&#9728;"; // bulan / matahari
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

// Ambil tema tersimpan, atau ikuti preferensi sistem
let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch (e) {}
if (!savedTheme) {
  savedTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});

// ===== Toggle menu mobile =====
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== Navbar shadow + scroll progress + back-to-top =====
const navbar = document.getElementById("navbar");
const progress = document.getElementById("scroll-progress");
const backToTop = document.getElementById("back-to-top");

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  progress.style.width = pct + "%";
  navbar.classList.toggle("scrolled", scrollTop > 10);
  backToTop.classList.toggle("show", scrollTop > 400);
}
window.addEventListener("scroll", onScroll);
onScroll();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Highlight link aktif =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((section) => navObserver.observe(section));

// ===== Efek mengetik (typewriter) di hero =====
const typeEl = document.getElementById("typewriter");
if (typeEl) {
  const words = (typeEl.dataset.words || "").split("|").filter(Boolean);
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const current = words[wordIndex] || "";
    typeEl.textContent = current.slice(0, charIndex);

    if (!deleting && charIndex < current.length) {
      charIndex++;
      setTimeout(type, 80);
    } else if (deleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 40);
    } else {
      if (!deleting) {
        deleting = true;
        setTimeout(type, 1600); // jeda saat kata penuh
      } else {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 300);
      }
    }
  }
  type();
}

// ===== Animasi angka menghitung naik =====
function countUp(el) {
  const target = parseInt(el.dataset.count, 10) || 0;
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ===== Reveal saat masuk layar + trigger count-up =====
const revealTargets = document.querySelectorAll(
  ".about-text, .about-card, .focus-highlight, .focus-card, .project-card, .timeline-item, .achievement-card, .contact-card, .section-head"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        const counter = entry.target.querySelector(".about-card-num");
        if (counter && !counter.dataset.done) {
          counter.dataset.done = "true";
          countUp(counter);
        }
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach((el) => revealObserver.observe(el));
