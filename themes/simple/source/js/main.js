setDarkMode();

function setDarkMode(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem("theme", 'dark');

    return;
  } else if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem("theme", 'light');

    return;
  }

  const savedPreference = localStorage.getItem("theme");

  if (savedPreference === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');

    return;
  } else if (savedPreference === "light") {
    document.documentElement.setAttribute('data-theme', 'light');

    return;
  }

  const prefersSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersSystemDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
