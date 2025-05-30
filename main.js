// main.js

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

toggle.addEventListener('click', () => {
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
});

button.addEventListener('click', () => {
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

// Optional: Animate cards on scroll (basic fade-in)
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
