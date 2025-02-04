const header = document.getElementById('header');

const sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

window.onscroll = function() {
    stickyHeader();
};


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'light') {
    body.removeAttribute('data-theme');
  } else {
    body.setAttribute('data-theme', 'light');
  }
});

const loadingScreen = document.getElementById('terminal-loader');
const content = document.getElementById('content');
const minLoadingTime = 5000; // 5 seconds
let startTime = Date.now();

window.addEventListener('load', () => {
  const elapsedTime = Date.now() - startTime;
  const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

  setTimeout(() => {
    loadingScreen.classList.add('hide');
    content.style.display = 'block';
  }, remainingTime);
});

setTimeout(() => {
  if (!content.style.display) {
    loadingScreen.classList.add('hide');
    content.style.display = 'block';
  }
}, minLoadingTime + 1000);


