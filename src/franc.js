(() => {
  const refs = {
    openFrancBtn: document.querySelector('[data-franc-open]'),
    closeFrancBtn: document.querySelector('[data-franc-close]'),
    franc: document.querySelector('[data-franc]'),
  };

  refs.openFrancBtn.addEventListener('click', toggleFranc);
  refs.closeFrancBtn.addEventListener('click', toggleFranc);

  function toggleFranc() {
    refs.franc.classList.toggle('is-hidden');
  }
})();
