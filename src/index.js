import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import anime from 'animejs/lib/anime.es';

let boxanime = anime({
  targets:'#box',
  duration:3000,
  translateX:[0,600],
  loop: true,
  easing: 'steps(10)',
  direction: 'alternate',
})