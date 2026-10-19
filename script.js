'use strict';

const config = window.siteConfig || {teamNumber: 'TEAM ##', members: [], links: {}};
const allLinks = config.links || {};

// Bind all download and document links from one easily edited configuration file.
document.querySelectorAll('[data-link]').forEach((element) => {
  const key = element.dataset.link;
  const url = typeof allLinks[key] === 'string' ? allLinks[key].trim() : '';
  const isValid = /^(https?:\/\/|\.\.?\/|[\w-]+\/)/i.test(url);

  if (isValid) {
    element.href = url;
    element.removeAttribute('aria-disabled');
    element.classList.add('is-available');
    if (/^https?:\/\//i.test(url)) {
      element.target = '_blank';
      element.rel = 'noopener noreferrer';
    }
    const status = element.querySelector('.link-status');
    if (status) status.textContent = 'Open file ↗';
  } else {
    element.removeAttribute('href');
    element.setAttribute('aria-disabled', 'true');
    element.classList.add('is-pending');
    element.title = 'Add this link in config.js when the file is ready';
  }
});

// Populate the team information without having to edit the HTML.
const number = document.getElementById('team-number');
if (number) number.textContent = config.teamNumber || 'TEAM ##';
const names = document.getElementById('team-names');
if (names && Array.isArray(config.members)) {
  names.replaceChildren();
  config.members.forEach((member) => {
    const span = document.createElement('span');
    span.textContent = member;
    names.appendChild(span);
  });
}

// Mobile navigation toggles without external libraries.
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }));
}

