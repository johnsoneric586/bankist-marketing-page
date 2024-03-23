'use strict';

// ----------Regular Variables----------

// ----------Functions----------
function handleHover(event) {
  const link = event.target.closest('.nav-link');
  const siblings = Array.from(
    link.closest('nav').querySelectorAll('.nav-link')
  );
  const logo = document.getElementById('nav-logo');

  siblings.forEach(sibling => {
    if (sibling !== link) {
      sibling.style.transition = 'all 0.2s ease';
      sibling.style.opacity = this;
    }
  });

  if (link !== logo) {
    logo.style.transition = 'all 0.2s ease';
    logo.style.opacity = this;
  }
}

// ----------Event Listeners----------
// Menu hover
nav.addEventListener('mouseover', handleHover.bind('0.5'));
nav.addEventListener('mouseout', handleHover.bind('1'));
