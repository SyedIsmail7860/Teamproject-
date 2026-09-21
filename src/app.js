document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // =========================
  // ELEMENTS
  // =========================
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const menuButton = document.getElementById("menuButton");
  const navLinks = document.getElementById("navLinks");
  const navbar = document.getElementById("navbar");
  const scrollProgress = document.getElementById("scrollProgress");

  const typingText = document.getElementById("typingText");

  const imageModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalClose = document.getElementById("modalClose");

  const backToTop = document.getElementById("backToTop");
  const toast = document.getElementById("toast");

  const contactForm = document.getElementById("contactForm");

  const musicButton = document.getElementById("musicButton");
  const backgroundMusic = document.getElementById("backgroundMusic");

  // =========================
  // THEME TOGGLE
  // =========================
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-theme");

      const isLight = body.classList.contains("light-theme");

      themeToggle.textContent = isLight ? "🌙" : "☀️";
      themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
      );

      localStorage.setItem("portfolioTheme", isLight ? "light" : "dark");
    });

    const savedTheme = localStorage.getItem("portfolioTheme");

    if (savedTheme === "light") {
      body.classList.add("light-theme");
      themeToggle.textContent = "🌙";
    } else {
      themeToggle.textContent = "☀️";
    }
  }

  // =========================
  // MOBILE MENU
  // =========================
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuButton.classList.toggle("active");

      const isOpen = navLinks.classList.contains("active");

      menuButton.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // =========================
  // SMOOTH SCROLL
  // =========================
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // =========================
  // SCROLL PROGRESS + NAVBAR
  // =========================
  function handleScroll() {
    const scrollTop = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      documentHeight > 0
        ? (scrollTop / documentHeight) * 100
        : 0;

    if (scrollProgress) {
      scrollProgress.style.width = `${progress}%`;
    }

    if (navbar) {
      navbar.classList.toggle("scrolled", scrollTop > 50);
    }

    if (backToTop) {
      backToTop.classList.toggle("show", scrollTop > 500);
    }

    updateActiveNav();
  }

  window.addEventListener("scroll", handleScroll, {
    passive: true
  });

  handleScroll();

  // =========================
  // ACTIVE NAVIGATION
  // =========================
  function updateActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-links a");

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 180;

      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      const href = link.getAttribute("href");

      link.classList.toggle(
        "active",
        href === `#${currentSection}`
      );
    });
  }

  // =========================
  // TYPING ANIMATION
  // =========================
  if (typingText) {
    const words = [
      "CSE Developer",
      "Python Developer",
      "Web Developer",
      "Software Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (!deleting) {
        typingText.textContent =
          currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
          deleting = true;

          setTimeout(typeEffect, 1400);
          return;
        }
      } else {
        typingText.textContent =
          currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setTimeout(typeEffect, deleting ? 55 : 90);
    }

    typeEffect();
  }

  // =========================
  // REVEAL ANIMATION
  // =========================
  const revealElements = document.querySelectorAll(
    ".reveal, .section-title, .skill-card, .project-card, .gallery-item, .about-card"
  );

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal");

      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  // =========================
  // PROFILE CARD TILT
  // =========================
  const profileCard = document.querySelector(".profile-card");

  if (profileCard && window.matchMedia("(pointer: fine)").matches) {
    profileCard.addEventListener("mousemove", (event) => {
      const rect = profileCard.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      profileCard.style.transform =
        `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    profileCard.addEventListener("mouseleave", () => {
      profileCard.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
  }

  // =========================
  // IMAGE MODAL
  // =========================
  const galleryImages = document.querySelectorAll(
    ".gallery-item img, .about-image img, .profile-image img"
  );

  function openImageModal(image) {
    if (!imageModal || !modalImage) return;

    modalImage.src = image.src;
    modalImage.alt = image.alt || "Portfolio image";

    imageModal.classList.add("active");
    body.classList.add("modal-open");
  }

  function closeImageModal() {
    if (!imageModal) return;

    imageModal.classList.remove("active");
    body.classList.remove("modal-open");
  }

  galleryImages.forEach((image) => {
    image.style.cursor = "pointer";

    image.addEventListener("click", () => {
      openImageModal(image);
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", closeImageModal);
  }

  if (imageModal) {
    imageModal.addEventListener("click", (event) => {
      if (event.target === imageModal) {
        closeImageModal();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeImageModal();
    }
  });

  // =========================
  // BACK TO TOP
  // =========================
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // =========================
  // TOAST
  // =========================
  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  // =========================
  // CONTACT FORM
  // =========================
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameInput = contactForm.querySelector(
        'input[name="name"], #name'
      );

      const emailInput = contactForm.querySelector(
        'input[name="email"], #email'
      );

      const messageInput = contactForm.querySelector(
        'textarea[name="message"], #message'
      );

      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const message = messageInput
        ? messageInput.value.trim()
        : "";

      if (!name || !email || !message) {
        showToast("Please fill in all fields.");
        return;
      }

      if (!email.includes("@")) {
        showToast("Please enter a valid email.");
        return;
      }

      showToast("Message form submitted successfully.");

      contactForm.reset();
    });
  }

  // =========================
  // MUSIC PLAYER
  // =========================
  if (musicButton && backgroundMusic) {
    musicButton.addEventListener("click", async () => {
      try {
        if (backgroundMusic.paused) {
          await backgroundMusic.play();

          musicButton.textContent = "⏸️";
          musicButton.setAttribute("aria-label", "Pause music");
          musicButton.setAttribute("title", "Pause music");
        } else {
          backgroundMusic.pause();

          musicButton.textContent = "🎵";
          musicButton.setAttribute("aria-label", "Play music");
          musicButton.setAttribute("title", "Play music");
        }
      } catch (error) {
        showToast("Tap again to start the music.");
      }
    });

    backgroundMusic.addEventListener("play", () => {
      musicButton.textContent = "⏸️";
    });

    backgroundMusic.addEventListener("pause", () => {
      musicButton.textContent = "🎵";
    });
  }

  // =========================
  // CURRENT YEAR
  // =========================
  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // =========================
  // BUTTON RIPPLE EFFECT
  // =========================
  document
    .querySelectorAll(".btn, .social-link, .music-button")
    .forEach((button) => {
      button.addEventListener("click", function () {
        this.classList.add("clicked");

        setTimeout(() => {
          this.classList.remove("clicked");
        }, 300);
      });
    });

  // =========================
  // PARTICLES
  // =========================
  const particlesContainer =
    document.querySelector(".particles");

  if (particlesContainer) {
    const particleCount = window.innerWidth < 768 ? 18 : 35;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("span");

      particle.className = "particle";

      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay =
        `${Math.random() * 5}s`;
      particle.style.animationDuration =
        `${4 + Math.random() * 6}s`;

      particlesContainer.appendChild(particle);
    }
  }

  // =========================
  // INITIAL STATE
  // =========================
  if (menuButton) {
    menuButton.setAttribute("aria-expanded", "false");
  }

  console.log("Ismail Portfolio loaded successfully 🚀");
});
