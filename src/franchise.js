(() => {
  const refs = {
    openFranchiseBtn: document.querySelector('[data-franchise-open]'),
    closeFranchiseBtn: document.querySelector('[data-franchise-close]'),
    franchise: document.querySelector('[data-franchise]'),
  };

  refs.openFranchiseBtn.addEventListener('click', toggleFranchise);
  refs.closeFranchiseBtn.addEventListener('click', toggleFranchise);

  function toggleFranchise() {
    refs.franchise.classList.toggle('is-hidden');
  }
})();
