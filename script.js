'use strict';

// ----------Regular Variables----------
const nav = document.getElementById('nav');
const navLogo = document.getElementById('nav-logo');
const navLinks = document.querySelectorAll('.nav-link');
const navSignupBtn = document.getElementById('nav-signup-btn');

// ----------Functions----------

// ----------Event Listeners----------

// If one nav element is hovered, the others are grayed out

nav.addEventListener('mouseover', function (event) {
  navLinks.forEach(link => {
    link.style.opacity = '0.5';
  });

  if (event.target !== navLogo) navLogo.style.opacity = '0.5';
  if (event.target !== navSignupBtn) navSignupBtn.style.opacity = '0.5';

  event.target.closest('.nav-link').style.opacity = '1';
  //   event.target.closest(`${navSignupBtn}`).style.opacity = '1';
  // TODO keep working on this hover affect for the nav, probably need to redo all the logic here b/c the real version is much better
});

nav.addEventListener('mouseout', function () {
  navLinks.forEach(link => {
    link.style.opacity = '1';
  });

  navLogo.style.opacity = '1';
});
