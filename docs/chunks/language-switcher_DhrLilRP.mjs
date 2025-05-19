document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferred-lang");
  if (savedLang) {
    document.documentElement.setAttribute("lang", savedLang);
  }
});
function switchLanguage(lang) {
  localStorage.setItem("preferred-lang", lang);
  window.location.reload();
}

export { switchLanguage };
