(function () {
  'use strict';

  const DESTINATION = '../main/index.html';
  const HOLD_AFTER_COMPLETE = 250;

  const fill = document.querySelector('.loading-bar__fill');
  const body = document.body;

  function getDuration(variable) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    if (value.endsWith('ms')) return parseFloat(value);
    if (value.endsWith('s')) return parseFloat(value) * 1000;
    return 0;
  }

  function redirect() {
    if (document.visibilityState === 'hidden') return;
    window.location.href = DESTINATION;
  }

  function startFadeOut() {
    body.classList.add('is-leaving');
    const fadeDuration = getDuration('--fade-duration');
    window.setTimeout(redirect, fadeDuration);
  }

  let completed = false;

  function onLoadingComplete() {
    if (completed) return;
    completed = true;
    window.setTimeout(startFadeOut, HOLD_AFTER_COMPLETE);
  }

  if (!fill) {
    startFadeOut();
    return;
  }

  fill.addEventListener('animationend', onLoadingComplete);

  const loadDuration = getDuration('--load-duration');
  window.setTimeout(onLoadingComplete, loadDuration + 200);
})();
