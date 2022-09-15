(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const closeBtnRef = document.querySelector('[data-close-button]');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
  });

  closeBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
  });
})();
