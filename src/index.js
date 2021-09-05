import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import anime from 'animejs/lib/anime.es';

let boxanime = anime({
  targets:'.js-box',
  duration:3000,
  translateX:(
    {
      value:100
    },
    {
      value:0
    }
  ),
  translateY:(
    {
      value:0,
    },
    {
      value:100
    }
  ),
  loop: true,
  easing: 'easeInOutSine',
  delay: (elm ,i) => i * 100,
  direction: 'alternate',
})