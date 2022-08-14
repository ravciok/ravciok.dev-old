const loadingSpinner = document.querySelector('.spinner-grow');
const utterancesContainer = document.querySelector('.utterances-container');
const currentTheme = document.documentElement.getAttribute('data-theme');
const script = document.createElement('script');

script.setAttribute('src', 'https://utteranc.es/client.js');
script.setAttribute('repo', 'ravciok/ravciok.dev-comments');
script.setAttribute('issue-term', 'pathname');
script.setAttribute('theme', `github-${currentTheme}`);
script.setAttribute('crossorigin', 'anonymous');
script.setAttribute('async', 'true');

utterancesContainer.appendChild(script);

setTimeout(() => {
  loadingSpinner.remove();
  utterancesContainer.classList.toggle('hide-on-loading');
}, 1000);
