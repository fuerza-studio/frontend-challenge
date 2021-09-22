// eslint-disable-next-line no-unused-vars
// import '/styles/index.scss';
import $ from 'jquery';

import '@styles';
import './images';
import App from './app';
import Example from './components/example';

// Your code goes here ...
$(() => {
  const app = new App([
    new Example(),
  ]);

  app.bootstrap();
});
