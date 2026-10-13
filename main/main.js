(function () {
  'use strict';

  const menuToggle = document.querySelector('.menu-toggle');
  const navigationDialog = document.querySelector('#navigation-dialog');
  const closeButton = document.querySelector('.dialog-close');
  const siteTitle = document.querySelector('.site-title');

  if (siteTitle) {
    const headerTitles = ['Cedraz Auto Peças', 'Soluções Automotivas'];
    let titleIndex = 0;

    window.setInterval(function () {
      titleIndex = (titleIndex + 1) % headerTitles.length;
      siteTitle.textContent = headerTitles[titleIndex];
      siteTitle.classList.remove('is-changing');
      void siteTitle.offsetWidth;
      siteTitle.classList.add('is-changing');
    }, 3000);
  }

  if (!menuToggle || !(navigationDialog instanceof HTMLDialogElement) || !closeButton) return;

  function closeNavigation() {
    if (navigationDialog.open) navigationDialog.close();
  }

  menuToggle.addEventListener('click', function () {
    if (!navigationDialog.open) {
      navigationDialog.showModal();
      menuToggle.setAttribute('aria-expanded', 'true');
    }
  });

  closeButton.addEventListener('click', closeNavigation);

  navigationDialog.addEventListener('click', function (event) {
    if (event.target instanceof Element && event.target.closest('.navigation-menu a')) {
      closeNavigation();
    }
  });

  navigationDialog.addEventListener('click', function (event) {
    if (event.target === navigationDialog) {
      closeNavigation();
    }
  });

  navigationDialog.addEventListener('close', function () {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.focus();
  });
})();