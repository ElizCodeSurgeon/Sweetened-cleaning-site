 console.log('main.js loaded');

// Scroll to top on page load
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// Basic contact form validation
const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', function (e) {
    const inputs = this.querySelectorAll('input[required], textarea[required]');
    let allFilled = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        allFilled = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '#ccc';
      }
    });

    if (!allFilled) {
      e.preventDefault();
      alert('Please fill in all required fields.');
    }
  });
});

// faq.js
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains("open");

      // Close all
      document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
      document.querySelectorAll(".faq-question").forEach(q => q.classList.remove("open"));

      // Toggle selected
      if (!isOpen) {
        answer.style.display = "block";
        btn.classList.add("open");
      }
    });
  });
});

// WhatsApp Widget Logic
const toggle = document.getElementById('whatsapp-toggle');
const popup = document.getElementById('whatsapp-popup');
const button = document.getElementById('start-chat');
const topic = document.getElementById('whatsapp-topic');

toggle?.addEventListener('click', () => {
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
});

button?.addEventListener('click', () => {
  const phone = '447123456789'; // Replace with your number
  const topicText = topic.value;
  const messages = {
    quote: 'Hi! I would like a cleaning quote.',
    booking: 'Hello! I want to book a cleaning service.',
    job: 'Hi! I am interested in joining your cleaning team.'
  };
  const message = encodeURIComponent(messages[topicText]);
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
});

// blog-script.js
const cards = document.querySelectorAll('.blog-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => {
  observer.observe(card);
});

// Hamburger menu logic (only once!)
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }
});








// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // Handle click on email to copy to clipboard
  const emailElements = document.querySelectorAll('.contact-info p, .overlay li');
  emailElements.forEach(el => {
    if (el.textContent.includes('@')) {
      el.style.cursor = 'pointer';
      el.title = 'Click to copy email';
      el.addEventListener('click', function () {
        const email = el.textContent.match(/\S+@\S+\.\S+/)[0];
        navigator.clipboard.writeText(email).then(() => {
          alert(`Email copied: ${email}`);
        });
      });
    }
  });

  // Smooth scroll to the hiring section when the page loads (optional)
  const hiringSection = document.querySelector('.hiring-container');
  if (hiringSection) {
    setTimeout(() => {
      hiringSection.scrollIntoView({ behavior: 'smooth' });
    }, 800);
  }

  // Optional: Apply click confirmation
  const applyNowItems = document.querySelectorAll('.overlay li');
  applyNowItems.forEach(item => {
    if (item.textContent.includes('Apply now')) {
      item.style.cursor = 'pointer';
      item.addEventListener('click', function () {
        alert('Thanks for your interest! Please send your details to sweetenedcleaningservices@gmail.com');
      });
    }
  });

});
