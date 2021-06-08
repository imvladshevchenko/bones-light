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
    setTimeout(callFunction, 600);
    isEventTriggered = true;
  }
});
