// script.js - Enhanced Interactivity & UI Logic

// Smooth dark mode toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };
  
  // Load dark mode preference on page load
  window.addEventListener('DOMContentLoaded', () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  
    // Optional: Add alert for contact form submission
    const form = document.querySelector("form[data-netlify='true']");
    if (form) {
      form.addEventListener("submit", () => {
        alert("Thank you! Your message has been sent.");
      });
    }
  
    // Initialize AOS animations if available
    if (window.AOS) {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }
  });
  
  // Optional floating action button setup (example)
  // You can trigger dark mode with a button with ID "darkToggle"
  const darkToggle = document.getElementById('darkToggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', toggleDarkMode);
  }  