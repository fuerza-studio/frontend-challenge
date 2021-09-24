// eslint-disable-next-line no-unused-vars

import '@styles';
import './images';
import App from './app';
import Example from './components/example';
import Header from './components/header';

// Your code goes here ...
document.addEventListener('DOMContentLoaded', () => {
  const app = new App([
    new Example(),
    new Header(),
  ]);

  app.bootstrap();
});
