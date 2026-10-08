(function () {
  'use strict';

  const menuToggle = document.querySelector('.menu-toggle');
  const navigationDialog = document.querySelector('#navigation-dialog');
  const closeButton = document.querySelector('.dialog-close');

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