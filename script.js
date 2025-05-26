function setLanguage(lang) {
  document.querySelectorAll('[data-lang-ar], [data-lang-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-lang-${lang}`);
  });
  localStorage.setItem('lang', lang);
}

function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark');
  body.classList.toggle('light');
  const mode = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
}

window.addEventListener('DOMContentLoaded', () => {
  // تحميل اللغة
  const savedLang = localStorage.getItem('lang') || 'ar';
  setLanguage(savedLang);

  // تحميل الوضع
  const savedMode = localStorage.getItem('mode') || 'light';
  document.body.classList.remove('dark', 'light');
  document.body.classList.add(savedMode);
});