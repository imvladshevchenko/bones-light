AOS.init();

let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let thirdNumber = document.getElementById("thirdNumber");
let fourthNumber = document.getElementById("fourthNumber");
let fifthNumber = document.getElementById("fifthNumber");
let sixthNumber = document.getElementById("sixthNumber");
let seventhNumber = document.getElementById("seventhNumber");
let eighthNumber = document.getElementById("eighthNumber");
let ninthNumber = document.getElementById("ninthNumber");

let srcArr = [
  "./img/numbers/0.png",
  "./img/numbers/1.png",
  "./img/numbers/2.png",
  "./img/numbers/3.png",
  "./img/numbers/4.png",
  "./img/numbers/5.png",
  "./img/numbers/6.png",
  "./img/numbers/7.png",
  "./img/numbers/8.png",
  "./img/numbers/9.png",
];

let i = 1;

function firstNumberAnimation() {
  setTimeout(function () {
    firstNumber.src = srcArr[i];
    i++;
    if (i < 2) {
      firstNumberAnimation();
    }
  }, 150);
}

let j = 1;
function secondNumberAnimation() {
  setTimeout(function () {
    secondNumber.src = srcArr[j];
    j++;
    if (j < 4) {
      secondNumberAnimation();
    }
  }, 150);
}

let k = 1;
function thirdNumberAnimation() {
  setTimeout(function () {
    thirdNumber.src = srcArr[k];
    k++;
    if (k < 5) {
      thirdNumberAnimation();
    }
  }, 150);
}

let d = 1;
function fourthNumberAnimation() {
  setTimeout(function () {
    fourthNumber.src = srcArr[d];
    d++;
    if (d < 4) {
      fourthNumberAnimation();
    }
  }, 150);
}

let isSlowCountingCalled = false;
let t = 1;
function fifthNumberAnimation() {
  setTimeout(function () {
    fifthNumber.src = srcArr[t];
    t++;
    if (t < 9) {
      fifthNumberAnimation();
    } else if (t == 9 && isSlowCountingCalled == false) {
      slowCounting1();
      isSlowCountingCalled = true;
    }
  }, 150);
}

let g = 1;
function sixthNumberAnimation() {
  setTimeout(function () {
    sixthNumber.src = srcArr[g];
    g++;
    if (g < 2) {
      sixthNumberAnimation();
    }
  }, 150);
}

let s = 1;
function seventhNumberAnimation() {
  setTimeout(function () {
    seventhNumber.src = srcArr[s];
    s++;
    if (s < 8) {
      seventhNumberAnimation();
    }
  }, 150);
}

let l = 1;
function eighthNumberAnimation() {
  setTimeout(function () {
    eighthNumber.src = srcArr[l];
    l++;
    if (l < 8) {
      eighthNumberAnimation();
    }
  }, 150);
}

let b = 1;
function ninthNumberAnimation() {
  setTimeout(function () {
    ninthNumber.src = srcArr[b];
    b++;
    if (b < 2) {
      ninthNumberAnimation();
    }
  }, 150);
}

let functionCall1 = false;
function slowCounting1() {
  setInterval(() => {
    ninthNumber.src = srcArr[b];
    b++;
    if (b == 10) {
      b = 0;
    }
    if (functionCall1 == false && b == 0) {
      slowCounting2();
      functionCall1 = true;
    }
  }, 1000);
}
let functionCall2 = false;
function slowCounting2() {
  setInterval(() => {
    eighthNumber.src = srcArr[l];
    l++;
    if (l == 10) {
      l = 0;
      functionCall2 = false;
    }
    if (functionCall2 == false && l == 0) {
      slowCounting3();
      functionCall2 = true;
    }
  }, 1500);
}
let functionCall3 = false;
function slowCounting3() {
  setInterval(() => {
    seventhNumber.src = srcArr[s];
    s++;
    if (s == 10) {
      s = 0;
    }
    if (functionCall3 == false && s == 0) {
      slowCounting4();
      functionCall3 = true;
    }
  }, 3000);
}
let functionCall4 = false;
function slowCounting4() {
  setInterval(() => {
    sixthNumber.src = srcArr[g];
    g++;
    if (g == 10) {
      g = 0;
    }
    if (functionCall4 == false && g == 0) {
      slowCounting5();
      functionCall4 = true;
    }
  }, 4500);
}
let functionCall5 = false;
function slowCounting5() {
  setInterval(() => {
    fifthNumber.src = srcArr[t];
    t++;
    if (t == 10) {
      t = 0;
    }
    console.log(functionCall5 == false && t == 0);
    if (functionCall5 == false && t == 0) {
      slowCounting6();
      functionCall5 = true;
    }
  }, 6000);
}
let functionCall6 = false;
function slowCounting6() {
  setInterval(() => {
    fourthNumber.src = srcArr[d];
    d++;
    if (d == 10) {
      d = 0;
    }
    if (functionCall6 == false && d == 0) {
      slowCounting7();
      functionCall6 = true;
    }
  }, 7500);
}
let functionCall7 = false;
function slowCounting7() {
  setInterval(() => {
    thirdNumber.src = srcArr[k];
    k++;
    if (k == 10) {
      k = 0;
    }
    if (functionCall7 == false && k == 0) {
      slowCounting8();
      functionCall7 = true;
    }
  }, 9000);
}
let functionCall8 = false;
function slowCounting8() {
  setInterval(() => {
    secondNumber.src = srcArr[j];
    j++;
    if (j == 10) {
      j = 0;
    }
    if (functionCall8 == false && j == 0) {
      slowCounting9();
      functionCall8 = true;
    }
  }, 10500);
}
function slowCounting9() {
  setInterval(() => {
    firstNumber.src = srcArr[i];
    i++;
    if (i == 10) {
      i = 0;
    }
  }, 12000);
}

function callFunction() {
  firstNumberAnimation(),
  secondNumberAnimation(),
  thirdNumberAnimation(),
  fourthNumberAnimation(),
  fifthNumberAnimation(),
  sixthNumberAnimation(),
  seventhNumberAnimation(),
  eighthNumberAnimation(),
  ninthNumberAnimation()
};

let isEventTriggered = false;
document.addEventListener("aos:in:super-duper", () => {
  if (isEventTriggered == false) {
    setTimeout(callFunction, 1000);
    isEventTriggered = true;
  }
});

!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=function t(e){return new t.prototype.init(e)};o.prototype.init=function(t){return t?t.tagName?(this[0]=t,this.length=1,this):(Object.assign(this,document.querySelectorAll(t)),this.length=document.querySelectorAll(t).length,this):this},o.prototype.init.prototype=o.prototype,window.$$=o;var r=o;r.prototype.show=function(t){for(var e=0;e<this.length;e++)this[e].style&&(this[e].style.display=t);return this},r.prototype.hide=function(){for(var t=0;t<this.length;t++)this[t].style&&(this[t].style.display="none");return this},r.prototype.toggle=function(){for(var t=0;t<this.length;t++)this[t].style&&("none"===this[t].style.display?this[t].style.display="auto":this[t].style.display="none");return this},r.prototype.addClass=function(){for(var t=0;t<this.length;t++){var e;(e=this[t].classList).add.apply(e,arguments)}return this},r.prototype.removeClass=function(){for(var t=0;t<this.length;t++){var e;(e=this[t].classList).remove.apply(e,arguments)}return this},r.prototype.toggleClass=function(t){for(var e=0;e<this.length;e++)this[e].classList.toggle(t);return this},r.prototype.animateOverTime=function(t,e,n){var o;return function r(i){o||(o=i);var a=i-o,s=Math.min(a/t,1);e(s),a<t?requestAnimationFrame(r):"function"==typeof n&&n()}},r.prototype.fadeIn=function(t){for(var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"block",o=arguments.length>2?arguments[2]:void 0,r=function(r){e[r].style.display=n;var i=e.animateOverTime(t,function(t){e[r].style.opacity=t},o);requestAnimationFrame(i)},i=0;i<this.length;i++)r(i);return this},r.prototype.fadeOut=function(t,e){for(var n=this,o=function(o){var r=n.animateOverTime(t,function(t){n[o].style.opacity=1-t,1===t&&(n[o].style.display="none")},e);requestAnimationFrame(r)},r=0;r<this.length;r++)o(r);return this},r.prototype.fadeToggle=function(t,e,n){for(var o=this,r=function(r){if("none"===window.getComputedStyle(o[r]).display){o[r].style.display=e||"block";var i=o.animateOverTime(t,function(t){o[r].style.opacity=t},n);requestAnimationFrame(i)}else{var a=o.animateOverTime(t,function(t){o[r].style.opacity=1-t,1===t&&(o[r].style.display="none")},n);requestAnimationFrame(a)}},i=0;i<this.length;i++)r(i);return this},r.prototype.animationDuration=function(t){for(var e=0;e<this.length;e++)this[e].style.animationDuration=Math.random()+t+"s";return this},r.prototype.animationDelay=function(t){for(var e=0;e<this.length;e++)this[e].style.animationDelay=Math.random()*t+"s";return this},r.prototype.scrollOpenElement=function(){for(var t=0;t<this.length;t++){var e,n={top:window.pageYOffset+this[t].getBoundingClientRect().top,left:window.pageXOffset+this[t].getBoundingClientRect().left,right:window.pageXOffset+this[t].getBoundingClientRect().right,bottom:window.pageYOffset+this[t].getBoundingClientRect().bottom},o={top:window.pageYOffset,left:window.pageXOffset,right:window.pageXOffset+document.documentElement.clientWidth,bottom:window.pageYOffset+document.documentElement.clientHeight};n.bottom>o.top&&n.top+0<o.bottom-screen.height/4&&n.right>o.left&&n.left<o.right&&(e=this[t].classList).add.apply(e,arguments)}return this},Element.prototype.closest||(Element.prototype.closest=function(t){for(var e=this;e;){if(e.matches(t))return e;e=e.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(null==t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var r=Object.keys(Object(o)),i=0,a=r.length;i<a;i++){var s=r[i],l=Object.getOwnPropertyDescriptor(o,s);void 0!==l&&l.enumerable&&(e[s]=o[s])}}return e}}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);var i,a,s,l=function(t,e,n){"function"!=typeof e?e=e||document:(n=e,e=document);var o=e.querySelectorAll(t);return o=Array.prototype.slice.call(e.querySelectorAll(t)),"function"==typeof n&&o.forEach(function(t,e,o){n(t,e,o)}),o}(".mousemove");"ontouchstart"in window||navigator.maxTouchPoints||(a="mousemove",s=function(t){for(var e=t.clientX-window.innerWidth/2,n=t.clientY-window.innerWidth/2,o=l.length-1;o>=0;o--)l[o].style.transform="translate("+e/l[o].dataset.movespeed/2+"px,"+n/l[o].dataset.movespeed/2+"px) rotate(0.01deg)"},(i=document)&&("addEventListener"in window?i.addEventListener(a,s,!1):"attachEvent"in window&&i.attachEvent("on"+a,s)))}]);