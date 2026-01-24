let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;

  const elements = document.querySelectorAll('[data-en]');

  elements.forEach(el => {
    if (lang === 'fr') {
      el.innerHTML = el.getAttribute('data-fr');
    } else {
      el.innerHTML = el.getAttribute('data-en');
    }
  });

  // Met à jour le bouton
  updateLanguageButton();

  // Sauvegarde préférence
  localStorage.setItem('portfolioLang', lang);
}

// Bouton toggle (EN <-> FR)
function toggleLanguage() {
  if (currentLang === 'en') {
    setLanguage('fr');
  } else {
    setLanguage('en');
  }
}

// Met à jour le texte du bouton
function updateLanguageButton() {
  const btn = document.getElementById('langToggleBtn');

  if (!btn) return;

  if (currentLang === 'en') {
    btn.textContent = 'FR'; // proposer français
  } else {
    btn.textContent = 'EN'; // proposer anglais
  }
}

// Charger langue au refresh
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('portfolioLang') || 'en';
  setLanguage(savedLang);
});
