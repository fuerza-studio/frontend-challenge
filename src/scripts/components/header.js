export default class Header {
  constructor() {
    this.selector = '[data-component="header"]';

    const $header = document.querySelector(this.selector);

    this.classes = {
      toggleMenuActive: 'is-active',
      menuActive: 'header-menu-active',
      rootMobileClass: 'mobile-menu-visible',
    };

    this.nodes = {
      root: document.querySelector('html'),
      header: $header,
      menu: $header.querySelector('[data-element="menu"]'),
      toggleMenu: $header.querySelector('[data-element="toggle-menu"]'),
    };
  }

  // eslint-disable-next-line class-methods-use-this
  bootstrap() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.nodes.toggleMenu.addEventListener('click', this.onToggleMenu.bind(this));
  }

  onToggleMenu(event) {
    event.preventDefault();

    this.nodes.root.classList.toggle(this.classes.rootMobileClass);
    this.nodes.menu.classList.toggle(this.classes.menuActive);
    this.nodes.toggleMenu.classList.toggle(this.classes.toggleMenuActive);
  }
}
