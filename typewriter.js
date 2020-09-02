"use strict";
document.querySelector("button").addEventListener("click", typewrite);
const text = document.querySelector(".typewritten").textContent;
document.querySelector(".typewritten").textContent = "";
console.log(text);

let n = 0;
let audioManager = 0;

function typewrite() {
  setTimeout(function () {
    const newText = text.substring(0, n + 1);
    console.log(newText);
    document.querySelector(".typewritten").textContent = newText;

    if (newText.endsWith(" ")) {
      document.querySelector("#typespace").play();
    } else if (newText.length === text.length) {
      document.querySelector("#typelast").play();
    } else if (audioManager === 0) {
      document.querySelector("#typekey1").play();
      audioManager++;
    } else {
      document.querySelector("#typekey2").play();
      audioManager = 0;
    }

    if (n === text.length) {
      console.log("sentence finished");
      n = 0;
    } else {
      n++;
      typewrite();
    }
  }, Math.round(Math.random() * (380 - 100) + 100));
}
