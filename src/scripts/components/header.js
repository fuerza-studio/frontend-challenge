import $ from 'jquery';

export default class Header {
  constructor() {
    this.selector = '[data-component="header"]';

    const $header = $(this.selector);

    this.classes = {
      toggleMenuActive: 'is-active',
      menuActive: 'header-menu-active',
      rootMobileClass: 'mobile-menu-visible',
    };

    this.nodes = {
      root: $('html'),
      header: $header,
      menu: $header.find('[data-element="menu"]'),
      toggleMenu: $header.find('[data-element="toggle-menu"]'),
    };
  }

  // eslint-disable-next-line class-methods-use-this
  bootstrap() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.nodes.toggleMenu.on('click', this.onToggleMenu.bind(this));
  }

  onToggleMenu(event) {
    event.preventDefault();

    this.nodes.root.toggleClass(this.classes.rootMobileClass);
    this.nodes.menu.toggleClass(this.classes.menuActive);
    this.nodes.toggleMenu.toggleClass(this.classes.toggleMenuActive);
  }
}
