//commonJS
//ES6 -> import

import _ from 'lodash';
import './style.css';
import './hello.scss';
import {area, circumference} from "./js/circle";
import box from './js/cube';
/*import{area,circumference} from "./js/circle"; //circle.js를 찾고 circle이 없다면 현재폴더에 circle폴더를 찾고 그 안에 index.js를 찾음
//default import 이름을 임의로 바꿀수 있음
import box from './js/cube';*/
function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log('webpack dev server is running')
console.log(area(5), circumference(5))
console.log(box(5));