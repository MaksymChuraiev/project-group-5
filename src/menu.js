(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    menuList: document.querySelector('.burger-menu__list')
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
  function removeMenu() {
    refs.menu.classList.add('is-hidden');
  }
})();